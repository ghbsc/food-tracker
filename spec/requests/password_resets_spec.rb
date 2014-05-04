require 'spec_helper'

describe "Password Resets" do
#  describe "GET /password_resets" do
#    it "works! (now write some real specs)" do
#      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
#      get password_resets_path
#      response.status.should be(200)
#    end
#  end
    
    subject { page }

    let(:user) { FactoryGirl.create(:user) }
    
    describe "emails user when requesting password set" do
      before do
        visit login_path
        click_link 'Forgot'
        fill_in 'Email', with: user.email
        click_button 'Send'
      end

      it { should have_content('Email sent') }
      specify { expect(last_email.to).to include(user.email) }
    end

    describe "does not email invalid user when requesting password reset" do
      before do
        visit login_path
        click_link 'Forgot'
        fill_in 'Email', with: 'madeupuser@quiz.org'
        click_button 'Send'
      end

      it { should have_content('Email sent') }
      specify { expect(last_email).to be_nil }
    end
end
