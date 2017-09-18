class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :user_id
      t.integer :goal_rating

      t.timestamps null: false 
    end
  end
end
