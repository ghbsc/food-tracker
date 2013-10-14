class CreateGoalsFoodHabitsJoinTable < ActiveRecord::Migration
  def change
    create_table :food_habits_goals, id: false do |t|
      t.integer :goal_id
      t.integer :food_habit_id 
      # t.index [:goal_id, :food_habit_id]
      # t.index [:food_habit_id, :goal_id]
    end
  end
end
