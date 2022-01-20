class Api::CategoriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_api_category, only: [:show, :update, :destroy]

  # GET /api/categories
  def index
    @api_categories = current_user.categories

    render json: Api::CategoryBlueprint.render(@api_categories)
  end

  # GET /api/categories/1
  def show
    render json: Api::CategoryBlueprint.render(@api_category)
  end

  # POST /api/categories
  def create
    @api_category = current_user.categories.new(create_params)
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
    if @api_category.destroy
      head :ok
    else
      render json: @api_category.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_category
      if current_user.categories.exists?(id: params[:id])
        @api_category = current_user.categories.find(params[:id])
      else
        head :forbidden
      end
    end

    # Only allow a list of trusted parameters through.
    def api_category_params
      params.require(:category).permit(:name, :allow_multiple_tags)
    end
    
    # Require params when creating
    def create_params
      category = params.require(:category)
      category.require([:name, :allow_multiple_tags])
      category.permit(:name, :allow_multiple_tags)
    end
end
