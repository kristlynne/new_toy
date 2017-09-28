class Api::V1::GoalsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Goal.where(user: current_user)
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
    goal = Goal.find(params[:id])
    new_progress = goal.progress + 1
    goal.update_attributes({ progress: new_progress })
    body = {
      name: goal.name,
      description: goal.description,
      progress: goal.progress
    }
    render json: body
  end

  def destroy
    goal = Goal.find(params[:id])
    if :user == current_user
      goal.destroy
      redirect_to 'goals#index'
    end
  end
end
