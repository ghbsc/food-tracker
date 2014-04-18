module SessionsHelper
  def current_user
    @current_user ||= User.find_by_auth_token(cookies[:auth_token]) if cookies[:auth_token]
  end
  #helper_method :current_user

  def signed_in?
    !current_user.nil?
  end

  def current_user?(user)
    user == current_user
  end

end
