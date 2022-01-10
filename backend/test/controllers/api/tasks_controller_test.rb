require "test_helper"

class Api::TasksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_task = api_tasks(:one)
  end

  test "should get index" do
    get api_tasks_url, as: :json
    assert_response :success
  end

  test "should create api_task" do
    assert_difference('Api::Task.count') do
      post api_tasks_url, params: { api_task: { description: @api_task.description, title: @api_task.title } }, as: :json
    end

    assert_response 201
  end

  test "should show api_task" do
    get api_task_url(@api_task), as: :json
    assert_response :success
  end

  test "should update api_task" do
    patch api_task_url(@api_task), params: { api_task: { description: @api_task.description, title: @api_task.title } }, as: :json
    assert_response 200
  end

  test "should destroy api_task" do
    assert_difference('Api::Task.count', -1) do
      delete api_task_url(@api_task), as: :json
    end

    assert_response 204
  end
end
