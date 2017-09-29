FactoryGirl.define do
  factory :user do
    email {Faker::Internet.email}
    password "password"
    password_confirmation "password"
    first_name "Eddie"
    last_name "Vedder"
    username "edvedder"
  end
end
