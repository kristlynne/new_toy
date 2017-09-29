require 'rails_helper'

feature "User sign in to their account" do
  let!(:user1) {FactoryGirl.create(:user)}
  scenario "User enters valid information to sign in" do

    visit root_path
    click_link 'Sign In'

    fill_in 'Email', with: user1.email
    fill_in 'password', with: user1.password
    click_button 'Sign In'

    expect(page).to have_button("Sign Out")
    expect(page).to_not have_content("Sign In")
    expect(page).to have_content("Signed in successfully.")
  end

    scenario "User enters invalid information" do
    visit root_path
    click_link 'Sign In'

    fill_in 'Email', with: 'notauser@email.com'
    fill_in 'user_password', with: 'wrongpassword'
    click_button 'Sign In'

    expect(page).to have_content("Sign In")
    expect(page).to_not have_content("Sign Out")
    expect(page).to have_content("Invalid Email or password.")
  end
end
