class AddGoalId < ActiveRecord::Migration[5.1]
  def change
    add_column :outcomes, :goal_id, :string, null: false
  end
end
