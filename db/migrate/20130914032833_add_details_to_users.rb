class AddDetailsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :last_name, :string
    add_column :users, :location, :string
    add_column :users, :gender, :string
    add_column :users, :birthday, :datetime
  end
end
