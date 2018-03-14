Rails.application.routes.draw do

  get '/teams' => 'teams#index'
  get '/students' => 'students#index'
  get '/experiences' => 'experiences#index'
  get '/skills' => 'skills#index'
  get '/educations' => 'educations#index'
  get '/capstones' => 'capstones#index'
  get '/capstones/:id' => 'capstones#show'
  


end

