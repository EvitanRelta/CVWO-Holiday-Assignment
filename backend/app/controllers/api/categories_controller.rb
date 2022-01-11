class Api::CategoriesController < ApplicationController
  before_action :set_api_category, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /api/categories
  def index
    @api_categories = current_user.categories

    render json: @api_categories
  end

  # GET /api/categories/1
  def show
    render json: @api_category
  end

  # POST /api/categories
  def create
    @api_category = current_user.categories.new(api_category_params)
    @api_category.user_id = current_user.id

    if @api_category.save
      render json: @api_category, status: :created, location: @api_category
    else
      render json: @api_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/categories/1
  def update
    if @api_category.update(api_category_params)
      render json: @api_category
    else
      render json: @api_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/categories/1
  def destroy
    @api_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_category
      if params[:id] != current_user.id
        head :unauthorized
      else
        @api_category = current_user.categories.find(params[:id])
      end
    end

    # Only allow a list of trusted parameters through.
    def api_category_params
      params.require(:api_category).permit(:name, :allow_multiple_tags)
    end
end