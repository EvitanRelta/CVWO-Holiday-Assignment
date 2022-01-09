class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.boolean :allow_multiple_tags

      t.timestamps
    end
  end
end
