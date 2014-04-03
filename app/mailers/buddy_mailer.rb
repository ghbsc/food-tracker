require 'securerandom'

class BuddyMailer < ActionMailer::Base
  default from: 'notifications@example.com'

  def invite_email(email, id)
    #@user = user
    #@url  = buddies_receive_url(token: SecureRandom.urlsafe_base64, id: id)
    @url  = new_user_registration_url(token: SecureRandom.urlsafe_base64, invited_by: id)
    mail(to: email, subject: 'Welcome to My Awesome Site')
  end

end
