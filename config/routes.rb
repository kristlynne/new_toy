Rails.application.routes.draw do
  devise_for :users
  root 'goals#index'


  namespace :api do
      namespace :v1 do
        resources :goals do
          end
        end
      end


  resources :goals, to: 'goals#index'
  resources :outcomes, only: [:index], to: 'goals#index'
  end
