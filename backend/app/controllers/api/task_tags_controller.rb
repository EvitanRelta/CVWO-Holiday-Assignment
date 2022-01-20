class Api::TaskTagsController < ApplicationController
    before_action :set_api_task, only: [:create, :destroy]
    before_action :authenticate_user!

    # POST /api/:task/tags
    def create
      if not @task.tags.exists?(id: @tag.id)
        if @task.tags << @tag
          head :created
        else
          render json: @task.tags.errors, status: :unprocessable_entity
        end
      else
        render json: {
          tag: ["has already been added"]
        }, status: :unprocessable_entity
      end
    end

    # DELETE /api/:task/tags/1
    def destroy
      if @task.tags.exists?(id: @tag.id)
        if @task.tags.delete(@tag)
          head :ok
        else
          render json: @task.tags.errors, status: :unprocessable_entity
        end
      else
        render json: {
          tag: ["task does not have tag"]
        }, status: :unprocessable_entity
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_api_task
        tag = Api::Tag.find_by(id: params[:id])
        task = current_user.tasks.find_by(id: params[:task_id])
      
        if tag and current_user.categories.exists?(id: tag.category_id) and task
          @tag = tag
          @task = task
        else
          head :forbidden
        end
      end
  end
  