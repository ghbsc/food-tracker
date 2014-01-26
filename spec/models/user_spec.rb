require 'spec_helper'

describe User do

  before do
    @user = User.new(email: 'foobar@fubu.org',
                     password: 'quizquiz')
  end

  subject { @user }

  it { should respond_to(:email) }
  it { should respond_to(:password) }

  it { should be_valid }

  describe "when email is not present" do
    before { @user.email = ' ' }
    it { should_not be_valid }
  end

  describe "when email is not present" do
    before { @user.password = ' ' }
    it { should_not be_valid }
  end
 
  describe "when password is too short" do
    before { @user.password = 't' * 3 }
    it { should_not be_valid }
  end 

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

end
