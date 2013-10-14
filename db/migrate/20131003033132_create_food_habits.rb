class CreateFoodHabits < ActiveRecord::Migration
  def change
    create_table :food_habits do |t|
      t.string :name

      t.timestamps
    end
  end
end
