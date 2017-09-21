class Api::V1::GoalsController < ApplicationController
  def index
    render json: Goal.all
  end
  def show
    render json: Goal.find(params[:id])
  end
  def create
  end
end
