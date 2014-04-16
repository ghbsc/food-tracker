FoodTracker::Application.routes.draw do
  get 'buddies/new'
  get 'buddies/receive'
  post "buddies", to: 'buddies#invite'
  match 'buddies/:id', to: 'buddies#confirm', via: 'patch'
  #get "logs/new"
  #get "logs/edit"

  get 'logs/new', to: 'logs#new' #, as: 'log' this is the name of the named route
  get 'logs/edit', to: 'logs#edit'

  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  resources :users
  resources :sessions 
  resources :goals, only: [:new, :create, :edit, :update] 
  resources :logs, only: [:create, :update] 
 
  #get ':controller/:action/:id' 
  get "settings/goals"
  #get "/pages/*id" => 'pages#show'
  get '/about/' => 'pages#about'

  #authenticated :user do
  #  root :to => 'visitors#new', as: :authenticated_root
  #end 
 
  #unauthenticated do
    root :to => 'visitors#new'#, as: :unauthenticated_root
  #end 

  #devise_for :users, :controllers => { :registrations => "registrations" }  
#  devise_for :users do
#    get 'users', :to => 'users#show', :as => :user_root 
#  end
  #resources :users
end
