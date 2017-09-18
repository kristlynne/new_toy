class Outcome < ApplicationRecord
  belongs_to :user
  belongs_to :goal
  has_many :users, through: :goals 
end
