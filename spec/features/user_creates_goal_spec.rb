require 'rails_helper'

feature "User creates new goal" do
  let!(:user1) {FactoryGirl.create(:user)}

  scenario "User visits create page" do
    visit root_path
    click_link "Sign In"
    fill_in "Email", with: user1.email
    fill_in "user_password", with: user1.password
    click_button "Sign In"
    click_button "Add a New Goal"

    expect(page).to have_button("Add Goal")
  end



  scenario "Un-authenticated user cannot create goals" do
    visit root_path

    expect(page).to_not have_button("Add Goal")
  end
end
