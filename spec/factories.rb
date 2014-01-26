FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "Person#{n}@person.org" }
    password "fubufoobar"

  end

  factory :tag do
    name "goovy"
    user
  end

end
