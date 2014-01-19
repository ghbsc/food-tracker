class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.decimal :weight
      t.decimal :body_fat
      t.decimal :body_water
      t.decimal :neck
      t.decimal :bicep
      t.decimal :forearm
      t.decimal :chest
      t.decimal :waist
      t.decimal :hips
      t.decimal :thigh
      t.decimal :calf
      t.belongs_to :log, index: true

      t.timestamps
    end
  end
end
