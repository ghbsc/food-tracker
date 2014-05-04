FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "Person#{n}@person.org" }
    password "fubufoobar"
    password_confirmation "fubufoobar"
  end

  factory :tag do
    name "goovy"
    user
  end

end
