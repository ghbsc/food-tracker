class CreateFoodFeats < ActiveRecord::Migration
  def change
    create_table :food_feats do |t|
      t.string :description

      t.timestamps
    end
  end
end
