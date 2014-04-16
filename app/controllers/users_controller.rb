class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.password_confirmation = @user.password

    if @user.save!
      session[:user_id] = @user.id 
      redirect_to root_url, notice: 'Thank you for signing up'
    else
      flash['alert'] =  @user.errors.full_messages
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
    redirect_to root_url unless current_user?(@user)
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      flash[:sucess] = 'Profile updated'
      session[:user_id] = @user.id
      redirect_to edit_user_path(current_user)
    else
      render 'edit'
    end 
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, 
                                    :password_confirmation, :remember_me, :location, :gender, 
                                    :birthday, :avatar, :avatar_cache, :remove_avatar, 
                                    :birthday_month, :birthday_day, :birthday_year,
                                    :invited_by)
    end

end
