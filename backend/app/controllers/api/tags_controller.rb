class Api::TagsController < ApplicationController
  before_action :set_api_tag, only: [:show, :update, :destroy]
  before_action :authenticate_user!
  
  # GET /api/tags
  # Doesn't make sense to get tags without categories.
  def index
    head :not_found
  end

  # GET /api/tags/1
  def show
    render json: Api::TagBlueprint.render(@api_tag, view: :all)
  end

  # POST /api/tags
  def create
    @category = current_user.categories.find_by(id: create_params[:category_id])
    @api_tag = @category.tags.new(create_params) if @category
    
    if not @category
      head :unauthorized
    elsif @api_tag.save
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
    head :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_tag
      tag = Api::Tag.find_by(id: params[:id])
      
      if tag and current_user.categories.exists?(id: tag.category_id)
        @api_tag = tag
      else
        head :unauthorized 
      end
    end

    # Only allow a list of trusted parameters through.
    def api_tag_params
      params.require(:tag).permit(:name, :category_id)
    end

    # Require params when creating
    def create_params
      tag = params.require(:tag)
      tag.require([:name, :category_id])
      tag.permit(:name, :category_id)
    end
end
