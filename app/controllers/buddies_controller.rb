class BuddiesController < ApplicationController
  def new
  end

  def invite
    #respond_to do |format|
      BuddyMailer.invite_email(params[:email_addresses]).deliver

      #format.html { redirect_to(buddies_invite_path, notice: 'Email was sent successfully') }
    #end
  end

  def create

  end
end
