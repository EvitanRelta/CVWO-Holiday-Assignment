require "test_helper"

class Api::TagsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_tag = api_tags(:one)
  end

  test "should get index" do
    get api_tags_url, as: :json
    assert_response :success
  end

  test "should create api_tag" do
    assert_difference('Api::Tag.count') do
      post api_tags_url, params: { api_tag: { name: @api_tag.name } }, as: :json
    end

    assert_response 201
  end

  test "should show api_tag" do
    get api_tag_url(@api_tag), as: :json
    assert_response :success
  end

  test "should update api_tag" do
    patch api_tag_url(@api_tag), params: { api_tag: { name: @api_tag.name } }, as: :json
    assert_response 200
  end

  test "should destroy api_tag" do
    assert_difference('Api::Tag.count', -1) do
      delete api_tag_url(@api_tag), as: :json
    end

    assert_response 204
  end
end
