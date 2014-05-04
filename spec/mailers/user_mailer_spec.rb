require "spec_helper"

describe UserMailer do
  describe "password_reset" do
#    let(:mail) { UserMailer.password_reset }
#
#    it "renders the headers" do
#      mail.subject.should eq("Password reset")
#      mail.to.should eq(["to@example.org"])
#      mail.from.should eq(["from@example.com"])
#    end
#
#    it "renders the body" do
#      mail.body.encoded.should match("Hi")
#    end
    
    let(:user) { FactoryGirl.create(:user, password_reset_token: 'anything') }
    let(:mail) { UserMailer.password_reset(user) }

    it "sends user password reset url" do
      mail.subject.should eq("Password Reset")
      mail.to.should eq([user.email])
      mail.from.should eq(["from@example.com"])
    end

    it "renders the body" do
      mail.body.encoded.should match(edit_password_reset_url(user.password_reset_token))
    end
  end

end
