class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.integer :user_id
      t.datetime :logged_date
      t.string :notes

      t.timestamps
    end
  end
end
