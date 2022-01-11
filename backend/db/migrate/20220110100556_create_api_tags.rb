class CreateApiTags < ActiveRecord::Migration[6.1]
  def change
    create_table :api_tags do |t|
      t.string :name
      t.integer :category_id

      t.timestamps
    end
  end
end
