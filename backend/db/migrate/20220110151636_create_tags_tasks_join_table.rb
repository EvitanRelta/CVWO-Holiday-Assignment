class CreateTagsTasksJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :tags, :tasks, table_name: :api_tags_tasks do |t|
      t.index [:tag_id, :task_id]
    end
  end
end
