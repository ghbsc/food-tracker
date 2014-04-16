class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :location
      t.string :gender
      t.datetime :birthday
      t.string :avatar
      t.integer :invited_by
      t.boolean :is_confirmed

      t.timestamps
    end
  end
end
