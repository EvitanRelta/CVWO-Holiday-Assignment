class CreateApiCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :api_categories do |t|
      t.string :name
      t.boolean :allow_multiple_tags

      t.timestamps
    end
  end
end
