class CreateTasksTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :api_tasks, :api_tags do |t|
      t.index :task_id
      t.index :tag_id
    end
  end
end
