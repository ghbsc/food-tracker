class DropTableRemoveGoalIdFromFoodHabits < ActiveRecord::Migration
  def change
    remove_column :food_habits, :goal_id

    #drop_table :food_habit_lookups
  end
end
