class Api::Category < ApplicationRecord
    belongs_to :user
    
    has_many :tags,
        class_name: "Api::Tag",
        foreign_key: "category_id",
        dependent: :destroy
end
