class Api::TagsController < ApplicationController
  before_action :set_api_tag, only: [:show, :update, :destroy]
  before_action :authenticate_user!
  
  # GET /api/tags
  # Doesn't make sense to get tags without categories.
  # def index
  #   @api_tags = Api::Tag.all

  #   render json: @api_tags
  # end

  # GET /api/tags/1
  def show
    render json: @api_tag
  end

  # POST /api/tags
  def create
    @category = current_user.categories.find_by(category_id: params[:category_id])
    @api_tag = @category.tags.new(api_tag_params)

    if @api_tag.save
      render json: @api_tag, status: :created, location: @api_tag
    else
      render json: @api_tag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/tags/1
  def update
    if @api_tag.update(api_tag_params)
      render json: @api_tag
    else
      render json: @api_tag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/tags/1
  def destroy
    @api_tag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_tag
      tag = Api::Tag.find(params[:id])
      
      if not current_user.categories.exists?(id: tag.category_id)
        head :unauthorized
      else
        @api_tag = tag
      end
    end

    # Only allow a list of trusted parameters through.
    def api_tag_params
      params.require(:api_tag).permit(:name, :category_id)
    end
end
