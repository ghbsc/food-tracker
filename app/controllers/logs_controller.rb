class LogsController < ApplicationController
  def new
    #@log = Log.new
    @log = current_user.logs.build(logged_date: params[:logged_date] ||= Date.today)
    @log.meals.build
    @log.measurements.build
  end

  def create
    set_params 

    @log= current_user.logs.build(log_params)
    #@log= Log.new(log_params)

    save_tags
    save_feats

    respond_to do |format|
      if @log.save
        @log_section = params[:log][:section]
        #Create a new log without a full post back. Subsequent requests are updates 
        @action = 'create'
        
        if !request.xhr?
          flash[:success] = "Save successful"
        end

        format.js   { render file: 'app/views/logs/create_update.js.erb' }
        format.html { redirect_to logs_edit_path(logged_date: params[:log][:logged_date].to_date.strftime('%Y-%m-%d')) }
        format.json { render json: @log, status: :created, location: @log }
        
        #redirect_to @log, :notice => "Successfully created survey."
        #redirect_to edit_log_path(@log) 
      else
        format.html { render action: "new" }  
        format.json { render json: @log.errors, status: :unprocessable_entity }
        #render 'new'
      end
    end

  end
  
  def edit
    #Only need to pull look up values. HABTM will do that automatically based on the defined relationship 
    @tags = current_user.tags 
    
    logged_date = params[:logged_date] ||= Date.today
    logged_date = logged_date.to_date

    @log = Log.detail(current_user.id, logged_date)
    @log.measurements.build if @log && @log.measurements.empty?
    
    if @log.nil?
      #redirect_to new_log_path(logged_date: logged_date)
      redirect_to logs_new_path << "?logged_date=#{logged_date}"
    else
      @log
    end
  end

  def update
    #@log = Log.find(params[:id])
    set_params

    @log = Log.detail(current_user.id, params[:log][:logged_date].to_date)
  
    save_tags
    save_feats

    respond_to do |format|
      if @log.update_attributes(log_params)
        @log_section = params[:log][:section]
        
        #At last, delete the tag table, update only 
        if params[:user] && params[:user][:tags]
          params[:user][:tags].each do |key, value|
            Tag.find(value[:id].to_i).delete if value[:_destroy] == '1'
          end
        end 
       
        if !request.xhr?
          flash[:success] = "Save successful"
        end 
        
        format.js   { render file: 'app/views/logs/create_update.js.erb' }
        format.html { redirect_to logs_edit_path(logged_date: params[:log][:logged_date].to_date.strftime('%Y-%m-%d')) }
        format.json { render json: @log, status: :created, location: @log }
      else
        format.html { render action: "edit" }  #render 'edit'
        format.json { render json: @log.errors, status: :unprocessable_entity }
      end
    end   

  end
  
  private
    def log_params
      params.require(:log).permit(:notes, :logged_date, meals_attributes: [:id, :eaten_at, :eaten_at_time, :notes, :_destroy], measurements_attributes: [:id, :weight, :body_fat, :body_water, :neck, :bicep, :forearm, :chest, :waist, :hips, :thigh, :calf, :_destroy])
    end

    def set_meal_params
      params[:log][:meals_attributes].each do |key, value|
        value[:eaten_at] = (params[:log][:logged_date].to_date.strftime('%Y-%m-%d') << ' ' << value[:eaten_at_time]).to_datetime 
      end
    end

    def set_params
      if params[:log] && params[:log][:meals_attributes]
        set_meal_params 
      end 
    end

    def save_tags
      #Add new tags first to the user before adding it to the log
      if params[:user] && params[:user][:tags]
        params[:user][:tags].each do |key, value|
          if value[:id] == '0'
            @tag = current_user.tags.build(name: value[:name])
            if @tag.save && params[:log] && params[:log][:tag_ids] && params[:log][:tag_ids][key] == '0' 
              params[:log][:tag_ids][key] = @tag.id.to_s
            end
          end 
        end
      end 

      #existing_tag_ids = params[:log][:tag_ids] - ['0'] 

      @log.tag_ids = params[:log][:tag_ids].values if params[:log] && params[:log][:tag_ids]
    end

    def save_feats
      @log.food_feat_ids = params[:log][:food_feat_ids].values if params[:log] && params[:log][:food_feat_ids]
    end

end
