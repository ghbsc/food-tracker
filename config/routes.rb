FoodTracker::Application.routes.draw do
  resources :goals, only: [:new, :create, :edit, :update] 
  
  get "settings/goals"
  #get "/pages/*id" => 'pages#show'
  get '/about/' => 'pages#about'

  authenticated :user do
    root :to => 'visitors#new', as: :authenticated_root
  end 
 
  #unauthenticated do
    root :to => 'visitors#new'#, as: :unauthenticated_root
  #end 

  devise_for :users
  #resources :users
end
