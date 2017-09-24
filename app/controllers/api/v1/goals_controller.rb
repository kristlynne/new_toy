class Api::V1::GoalsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Goal.all
  end
  def show
    render json: Goal.find(params[:id])
  end
  def create
    data = JSON.parse(request.body.read)
    goal = Goal.create(name: data["goal"]["name"], description: data["goal"]["description"], user: current_user)
    render json: goal
    #read the data
    #persist the goal with the read data
    #use the current_user to save the goal's user
    #return the json of the newly created goal
  end
  def update
    update_today = Goal.find(params[:id])
    id = update_today.id
    newProgress = request.body.read.to_i
    update_today.progress = newProgress
    update_today.save
    progress = update_today.progress

    data = {
      name: name,
      description: description,
      progress: update_today.progress
    }

    render json: data
  end
end
