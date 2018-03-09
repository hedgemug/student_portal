class TestsController < ApplicationController
  def index
    render json: {message: 'I win!'}
  end
end
