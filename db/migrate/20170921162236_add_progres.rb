class AddProgres < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :progress, :integer, default:0, null: false 
  end
end
