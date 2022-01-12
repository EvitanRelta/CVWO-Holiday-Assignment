class Api::TasksController < ApplicationController
  before_action :set_api_task, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /api/tasks
  def index
    @api_tasks = current_user.tasks

    render json: @api_tasks
  end

  # GET /api/tasks/1
  def show
    render json: @api_task
  end

  # POST /api/tasks
  def create
    @api_task = current_user.tasks.new(api_task_params)
    @api_task.user_id = current_user.id
    
    if @api_task.save
      render json: @api_task, status: :created, location: @api_task
    else
      render json: @api_task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/tasks/1
  def update
    if @api_task.update(api_task_params)
      render json: @api_task
    else
      render json: @api_task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/tasks/1
  def destroy
    @api_task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_task
      if current_user.tasks.exists?(id: params[:id])
        @api_task = current_user.tasks.find(params[:id])
      else
        head :unauthorized
      end
    end

    # Only allow a list of trusted parameters through.
    def api_task_params
      params.require(:api_task).permit(:title, :description)
    end
end
