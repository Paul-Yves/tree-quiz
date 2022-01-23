class AnswersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create
  before_action :check_password, only: %i[index destroy]

  def index; end

  def create
    Answer.create!(username: params[:name], user_answers: params[:answers])
    render json: {}
  end

  def destroy
    Answer.delete(params[:id])
    redirect_to(action: 'index', password: params[:password])
  end

  private

  def check_password
    return head :forbidden if params[:password] != ENV['PASSWORD']
  end
end
