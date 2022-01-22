class AnswersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    return head :forbidden if params[:password] != ENV['PASSWORD']
  end

  def create
    Answer.create!(username: params[:name], answers: params[:answers])
    render json: {}
  end
end
