class Api::Tag < ApplicationRecord
    belongs_to :category,
        class_name: "Api::Category",
        foreign_key: "category_id"
    validates :name, uniqueness: { scope: :category }

    has_and_belongs_to_many :tasks, 
        class_name: "Api::Task",
        join_table: "api_tags_tasks"
end
