class UsersController < ApplicationController

  def index
    @goals = Goal.all
  end
end
