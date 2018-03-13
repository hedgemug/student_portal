Rails.application.routes.draw do

  get '/teams' => 'teams#index'
  get '/students' => 'databases#index'
  get '/experiances' => 'experiances#index'
  get '/skills' => 'skills#index'
  get '/education' => 'educations#index'
  get '/capstones' => 'capstones#index'
  get '/capstones/:id' => 'capstones#show'

end

