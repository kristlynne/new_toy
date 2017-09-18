Rails.application.routes.draw do
  devise_for :users
  root 'goals#index'
  # devise_for :users


  resources :goals
    resources :outcomes, only: [:index]
  end
