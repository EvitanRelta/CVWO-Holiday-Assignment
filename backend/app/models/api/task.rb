class Api::Task < ApplicationRecord
    belongs_to :user

    has_and_belongs_to_many :tags,
        class_name: "Api::Tag",
        join_table: "api_tags_tasks"
end
