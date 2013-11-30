class AddGoalIdToFoodHabits < ActiveRecord::Migration
  def change
    add_column :food_habits, :goal_id, :integer
  end
  
#  change_table :food_habits do |t|
#    t.foreign_key :goals, dependent: :delete
#  end 
end
