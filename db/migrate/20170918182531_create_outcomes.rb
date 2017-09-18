class CreateOutcomes < ActiveRecord::Migration[5.1]
  def change
    create_table :outcomes do |t|

      t.timestamps
    end
  end
end
