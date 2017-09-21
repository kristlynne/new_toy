class RemoveOutcomeId < ActiveRecord::Migration[5.1]
  def change
    remove_column :goals, :outcome_id, :string, null: false
  end
end
