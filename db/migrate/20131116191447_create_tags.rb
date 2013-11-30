class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.belongs_to :user 
      t.string :name

      t.timestamps
    end
  end
end
