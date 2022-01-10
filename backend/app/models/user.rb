# frozen_string_literal: true

class User < ActiveRecord::Base
    extend Devise::Models
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable
    include DeviseTokenAuth::Concerns::User

    has_many :tasks, 
        class_name: "Api::Task", 
        foreign_key: "user_id",
        dependent: :destroy

    has_many :categories,
        class_name: "Api::Category", 
        foreign_key: "user_id",
        dependent: :destroy
end
