class AddForeignKeyConstraintToFoodHabits < ActiveRecord::Migration
  add_foreign_key(:food_habits, :goals)


#  def change
#  end
end
