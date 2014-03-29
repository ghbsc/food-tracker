require 'securerandom'

class BuddyMailer < ActionMailer::Base
  default from: 'notifications@example.com'

  def invite_email(email)
    #@user = user
    @url  = buddies_receive_url(token: SecureRandom.urlsafe_base64)
    mail(to: email, subject: 'Welcome to My Awesome Site')
  end

end
