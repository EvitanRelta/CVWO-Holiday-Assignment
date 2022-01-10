class Api::Task < ApplicationRecord
    belongs_to :user

    has_and_belongs_to_many :tags,
        join_table: "tasks_tags",
        foreign_key: "tag_id"
end
