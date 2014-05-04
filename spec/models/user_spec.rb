require 'spec_helper'

describe User do

  before do
    @user = User.new(email: 'foobar@fubu.org',
                     password: 'quizquiz',
                     password_confirmation: 'quizquiz')
  end

  subject { @user }

  it { should respond_to(:email) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }
  it { should respond_to(:password_digest) }
  it { should respond_to(:auth_token) }
  it { should respond_to(:first_name) }
  it { should respond_to(:last_name) }
  it { should respond_to(:location) }
  it { should respond_to(:gender) }
  it { should respond_to(:birthday) }
  it { should respond_to(:avatar) }
  it { should respond_to(:invited_by) }
  it { should respond_to(:is_confirmed) }
  it { should respond_to(:password_reset_token) }
  it { should respond_to(:password_reset_sent_at) }

  it { should be_valid }

  describe "when email is not present" do
    before { @user.email = ' ' }
    it { should_not be_valid }
  end

#  describe "when password is not present" do
#    before do
#      @user.password = " "
#      @user.password_confirmation = " "
#    end
#    it { should_not be_valid }
#  end
# 
#  describe "when password is too short" do
#    before { @user.password = 't' * 3 }
#    it { should_not be_valid }
#  end 

  describe "when email is invalid" do
    it "should be invalid" do
      addresses = %w[test@quiz,com quiz-test.org exam.user@
                      foobar..gov]
      addresses.each do |invalid_address| 
        @user.email = invalid_address
        expect(@user).not_to be_valid
      end
    end
  end
  
  describe "when email is valid" do
    it "should be valid" do
      addresses = %w[test@quiz.com quiz@test.org 
                      foobar@exam.gov]
      addresses.each do |valid_address| 
        @user.email = valid_address
        expect(@user).to be_valid
      end
    end
  end

  describe "when email is already taken" do
    before do
      user_with_dupe_email = @user.dup
      user_with_dupe_email.save 
    end

    it { should_not be_valid }
  end 

  describe "tag associations" do

    before { @user.save }
    let!(:older_tag) do
      FactoryGirl.create(:tag, user: @user, created_at: 2.day.ago)
    end
    let!(:newer_tag) do
      FactoryGirl.create(:tag, user: @user, created_at: 2.hour.ago)
    end

    it "should have the right tags in the right order" do
      expect(@user.tags.to_a).to eq [older_tag, newer_tag]
    end
    
    it "should have the right number of tags" do
      expect(@user.tags.to_a.length).to eq [older_tag, newer_tag].length
    end

  end

  describe "send password reset" do
    let(:user) { FactoryGirl.create(:user) }

    it "generates a unique password_reset_token each time" do
      user.send_password_reset
      last_token = user.password_reset_token
      user.send_password_reset

      expect(user.password_reset_token).not_to eq(last_token)
    end 
  end

end
