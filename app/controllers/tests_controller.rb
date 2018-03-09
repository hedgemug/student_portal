class TestsController < ApplicationController
  def index
    render json: {message: 'Drew wins!'}
    # Drew's Comments on this important function
  end
end
