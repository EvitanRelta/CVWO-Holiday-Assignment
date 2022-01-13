class Api::TagBlueprint < Blueprinter::Base
  identifier :id
  fields :name, :category_id

  view :all do
    fields :created_at, :updated_at

    # Work around
    # include_view :with_tasks
    association :tasks, blueprint: Api::TaskBlueprint
  end
  
  # Work around
  association :tasks, blueprint: Api::TaskBlueprint, if: ->(_field_name, _task, options) { options[:view] == :with_tasks }
  
  # Doesn't seem to work in CategoryBlueprint
  # view :with_tasks do
  #   association :tasks, blueprint: Api::TaskBlueprint
  # end
end
