class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:first_name, :last_name, :email, :password, 
                                                :password_confirmation, :remember_me, :location, :gender, 
                                                :birthday, :avatar, :avatar_cache, :remove_avatar, 
                                                :birthday_month, :birthday_day, :birthday_year,
                                                :invited_by) }
 
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:first_name, :last_name, :email, :password, 
                                                :password_confirmation, :remember_me, :location, :gender, 
                                                :birthday, :avatar, :avatar_cache, :remove_avatar, 
                                                :birthday_month, :birthday_day, :birthday_year,
                                                :invited_by) }
  end
end
