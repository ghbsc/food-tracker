class LogsController < ApplicationController
  def new
    #@log = Log.new
    @log = current_user.logs.build(logged_date: params[:logged_date] ||= Date.today)
    @log.meals.build
    
  end

  def create
    set_params 

    @log= current_user.logs.build(log_params)
    #@log= Log.new(log_params)
    if @log.save
      #redirect_to @log, :notice => "Successfully created survey."
      #redirect_to edit_log_path(@log) 
    else
      render 'new'
    end
  end
  
  def edit
    @tags = current_user.tags 
    
    logged_date = params[:logged_date] ||= Date.today
    logged_date = logged_date.to_date

    @log = Log.detail(current_user.id, logged_date)

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

    if @log.update_attributes(log_params)
      #redirect_to @log, :notice  => "Successfully updated survey."
      flash[:success] = "Save successful"
      redirect_to edit_log_path(logged_date: params[:log][:logged_date].to_date.strftime('%Y-%m-%d'))
    else
      render 'edit'
    end

    #At last, delete the tag table, update only 
    if params[:user] && params[:user][:tags]
      params[:user][:tags].each do |key, value|
        Tag.find(value[:id].to_i).delete if value[:_destroy] == '1'
      end
    end 

  end
  
  private
    def log_params
      params.require(:log).permit(:notes, :logged_date, meals_attributes: [:id, :eaten_at, :eaten_at_time, :notes, :_destroy])
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

end
