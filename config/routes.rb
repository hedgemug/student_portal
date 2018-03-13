Rails.application.routes.draw do

  get '/teams' => 'teams#index'
  get '/students' => 'databases#index'
  get '/experiences' => 'experiences#index'
  get '/skills' => 'skills#index'
  get '/education' => 'educations#index'
  get '/capstones' => 'capstones#index'

end

