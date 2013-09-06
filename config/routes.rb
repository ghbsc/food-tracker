FoodTracker::Application.routes.draw do
  #get "/pages/*id" => 'pages#show'
  root :to => 'visitors#new'
end
