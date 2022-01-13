class Api::CategoryBlueprint < Blueprinter::Base
  identifier :id
  fields :name, :allow_multiple_tags, :created_at, :updated_at

  association :tags, blueprint: Api::TagBlueprint, options: { view: :with_tasks }
end
