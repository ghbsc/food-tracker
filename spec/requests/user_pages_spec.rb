require 'spec_helper'

describe "User pages" do

  subject { page }  

  describe "signup" do
    before { visit signup_path }

    it { should have_content('Email') }
  end

  describe "signin" do
    before { visit login_path }

    describe "with invalid information" do
      before { click_button "Login" }

      it { should have_selector('div.alert.alert-error') } 
    end

    describe "with valid information" do
      let(:user) { FactoryGirl.create(:user) } 
      before do
        fill_in "Email", with: user.email
        fill_in "Password", with: user.password
        click_button "Login" 
      end
   
      it { should have_title('Rails Bootstrap') } 
      it { should have_selector('div.alert.alert-success') } 
      it { should have_selector(:css, 'ul li a span#header-login-name') } 
      it { should have_link('Sign out', href: logout_path) }

      describe "followed by signout" do
        before { click_link 'Sign out' }
        it { should have_link('Login', href: login_path) }
      end 

    end


  end

end
