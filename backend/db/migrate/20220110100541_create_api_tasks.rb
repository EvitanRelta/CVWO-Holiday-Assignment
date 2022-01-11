class CreateApiTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :api_tasks do |t|
      t.string :title
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
