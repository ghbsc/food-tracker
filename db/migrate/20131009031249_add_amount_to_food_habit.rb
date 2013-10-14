class AddAmountToFoodHabit < ActiveRecord::Migration
  def change
    add_column :food_habits, :amount, :string
  end
end
