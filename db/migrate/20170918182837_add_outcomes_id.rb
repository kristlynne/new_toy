class AddOutcomesId < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :outcome_id, :string, null: false 
  end
end
