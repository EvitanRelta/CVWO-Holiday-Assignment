class Api::Tag < ApplicationRecord
    belongs_to :category,
        class_name: "Api::Category",
        foreign_key: "category_id"

    has_and_belongs_to_many :tasks, 
        join_table: "tasks_tags", 
        foreign_key: "task_id"
end
