class Api::TaskBlueprint < Blueprinter::Base
  identifier :id
  fields :title, :description, :created_at, :updated_at

  # Uncategorised Tags
  view :with_tags do
    association :tags, blueprint: Api::TagBlueprint
  end

  # Categorised Tags
  view :categorised_tags do
    field :categories do |task, options|
      cleaned_tags = Api::TagBlueprint.render_as_hash(task.tags)
      temp = cleaned_tags.group_by { |tag| tag[:category_id] }
      grouped = temp.keys&.each_with_object({}) do |k, result|
        result[Api::Category.find(k).name] = temp[k]
      end
      grouped
    end
  end
end
