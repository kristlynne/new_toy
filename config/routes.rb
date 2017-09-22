Rails.application.routes.draw do
  devise_for :users
  root 'goals#index'


  namespace :api do
      namespace :v1 do
        resources :goals, only: [:index, :show, :create, :update, :destroy] do
          end
        end
      end


  resources :goals
  resources :outcomes, only: [:index]
  end
