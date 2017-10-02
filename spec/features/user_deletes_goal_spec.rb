require 'rails_helper'

feature 'user visits goals index page' do
  let!(:goal) {Goal.create!(name: "Recycle", description: "try to recycle all the correct materials", user: user1)}
  let!(:user1) {FactoryGirl.create(:user)}
  scenario 'user sees a list of posts' do
    visit goals_path
    click_on goal

    expect(page).to have_content("Recycle")
    expect(page).to have_content("try to recycle all the correct materials")
    expect(page).to have_content("0 days")

  end


  scenario "User deletes post" do
    visit root_path
    click_link "Sign In"
    fill_in "Email", with: user1.email
    fill_in "user_password", with: user1.password
    click_button "Sign In"
    click_link goal

    page.find('#delete').click

    expect(page).to_not have_content(goal)
  end

  scenario "Un-authenticated user cannot delete posts" do
    visit root_path
    click_link post.title

  expect(page).to_not have_button("Delete This Post")

  end
end
