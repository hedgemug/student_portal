Rails.application.routes.draw do

  get '/students' => 'databases#index'
  get '/experiances' => 'experiances#index'
  get '/skills' => 'skills#index'
  get '/education' => 'educations#index'
  get '/capstone' => 'capstone#index'
end

