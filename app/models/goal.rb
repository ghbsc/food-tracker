class Goal < ActiveRecord::Base
  has_and_belongs_to_many :food_habits
  belongs_to :user
end
