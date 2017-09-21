class RemoveGoalRating < ActiveRecord::Migration[5.1]
  def change
    remove_column :goals, :goal_rating, :integer
  end
end
