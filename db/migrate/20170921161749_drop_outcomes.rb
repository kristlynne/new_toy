class DropOutcomes < ActiveRecord::Migration[5.1]
  def change
    drop_table :outcomes 
  end
end
