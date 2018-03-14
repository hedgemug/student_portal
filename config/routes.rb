Rails.application.routes.draw do

  get '/students' => 'students#index'
  get '/experiences' => 'experiences#index'
  get '/skills' => 'skills#index'
  get '/education' => 'educations#index'
  get '/capstones' => 'capstones#index'
  get '/capstones/:id' => 'capstones#show'


end

