require "test_helper"

class Api::CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_category = api_categories(:one)
  end

  test "should get index" do
    get api_categories_url, as: :json
    assert_response :success
  end

  test "should create api_category" do
    assert_difference('Api::Category.count') do
      post api_categories_url, params: { api_category: { allow_multiple_tags: @api_category.allow_multiple_tags, name: @api_category.name } }, as: :json
    end

    assert_response 201
  end

  test "should show api_category" do
    get api_category_url(@api_category), as: :json
    assert_response :success
  end

  test "should update api_category" do
    patch api_category_url(@api_category), params: { api_category: { allow_multiple_tags: @api_category.allow_multiple_tags, name: @api_category.name } }, as: :json
    assert_response 200
  end

  test "should destroy api_category" do
    assert_difference('Api::Category.count', -1) do
      delete api_category_url(@api_category), as: :json
    end

    assert_response 204
  end
end
