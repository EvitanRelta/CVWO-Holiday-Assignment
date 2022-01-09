Rails.application.routes.draw do
  namespace :api do
    resources :tags
    resources :categories
    resources :tasks
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
