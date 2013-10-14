class FoodHabit < ActiveRecord::Base
  has_and_belongs_to_many :goals

  default_scope -> { order('name') }
  scope :more_amount, where(amount: 'more')
  scope :less_amount, where(amount: 'less') 
end
