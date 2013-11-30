class CreateJoinTableLogTag < ActiveRecord::Migration
  def change
    create_join_table :logs, :tags do |t|
       t.index [:log_id, :tag_id]
       t.index [:tag_id, :log_id]
    end
  end
end
