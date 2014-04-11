class BuddiesController < ApplicationController
  def new
    @buddy_requests = User.buddy_requests(current_user)
    @your_buddies = User.your_buddies(current_user) 
  end

  def invite
    #respond_to do |format|
      BuddyMailer.invite_email(params[:email_addresses], current_user.id).deliver
      redirect_to buddies_new_path 
      #format.html { redirect_to(buddies_invite_path, notice: 'Email was sent successfully') }
    #end
  end

  def confirm
    #Create a patch named route. Turn on the flag
    @buddy = User.find(params[:id])
    @buddy.is_confirmed = true 
    
    if @buddy.save 
      flash[:success] = "buddies confirmed"
      redirect_to buddies_new_path 
    else
      render "new"
    end
    
  end

  def create

  end
end
