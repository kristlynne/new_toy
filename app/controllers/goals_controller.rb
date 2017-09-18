class GoalsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @goals = Goal.all
  end
  def show
    @goal = Goal.find(params[:id])
  def new
    @goal = Goal.new
  end
  def create
    @goal = Goal.new(goal_params)
    @goal.user = current_user
  end
  def edit
    @goal = Goal.find(params[:id])
  end
  def update
    @goal = Goal.find(params[:id])
    @outcome = @goal.outcome
    if current_user == @goal.user
      if @goal.update(goal_params)
        redirect_to goals_path(@goal)
      else
        flash[:notice] = "Invalid user. These aren't your goals."
        redirect_to goals_path
      end
    end

    private

    def goal_params
      params.require(:goal).permit(:user_id)

    end

end
