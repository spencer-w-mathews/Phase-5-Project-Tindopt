Rails.application.routes.draw do
  
  resources :favorites
  resources :shelters
  resources :animals
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post "/favorite", to: "favorites#create"
  get "/me", to: "users#show_me"
  delete "/logout", to: "sessions#destroy"
end
