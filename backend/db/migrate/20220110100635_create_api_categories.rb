class CreateApiCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :api_categories do |t|
      t.string :name
      t.boolean :allow_multiple_tags
      t.integer :user_id

      t.timestamps
    end
  end
end
