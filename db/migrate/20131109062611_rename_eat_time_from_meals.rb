class RenameEatTimeFromMeals < ActiveRecord::Migration
  def change
    rename_column :meals, :eat_time, :eaten_at
  end
end
