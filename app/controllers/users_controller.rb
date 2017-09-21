class UsersController < ApplicationController

  def index
    @goals = Goal.all
    @outcomes = Outcome.all
  end
end
