class Goal < ApplicationRecord
  belongs_to :user
  has_many :outcomes

  validates :user_id, presence: true 
end
