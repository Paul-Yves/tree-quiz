class ValentinesController < ApplicationController
  before_action :check_password, only: %i[index destroy]

  def index; end

  def new; end
  def done; end

  def create
    Valentine.create!(content: params.require(:valentine)[:content])
    redirect_to done_valentines_path
  end

  def destroy
    Valentine.delete(params[:id])
    redirect_to(action: 'index', password: params[:password])
  end

  private

  def check_password
    return head :forbidden if params[:password] != ENV['PASSWORD']
  end
end
