class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
      t.integer :log_id
      t.datetime :meal_time
      t.string :notes

      t.timestamps
    end
  end
end
