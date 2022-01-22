class AnswersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
    Answer.create!(username: params[:name], answers: params[:answers])
    render json: {}
  end
end
