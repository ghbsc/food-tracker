class CreateJoinTableFoodFeatLog < ActiveRecord::Migration
  def change
    create_join_table :food_feats, :logs do |t|
      # t.index [:food_feat_id, :log_id]
      # t.index [:log_id, :food_feat_id]
    end
  end
end
