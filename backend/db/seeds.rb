# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create(email: 'admin@admin.com', password: '123456', password_confirmation: '123456')
admin_category = admin.categories.create(user_id: admin.id, name: 'Admin category', allow_multiple_tags: true)
admin_tag = admin_category.tags.create(category_id: admin_category.id, name: 'Admin tag')
admin_task = admin.tasks.create(user_id: admin.id, title: 'Admin task', description: 'What did u say about me?')
admin_task.tags << admin_tag

tag_2 = admin_category.tags.create(category_id: admin_category.id, name: 'Tag 2')
admin_task.tags << tag_2

admin_category_2 = admin.categories.create(user_id: admin.id, name: 'Category 2', allow_multiple_tags: true)
tag_3 = admin_category_2.tags.create(category_id: admin_category_2.id, name: 'Tag 3')
admin_task.tags << tag_3

task_2 = admin.tasks.create(user_id: admin.id, title: 'Task 2', description: 'I <3 NUS')
task_2.tags << admin_tag

member = User.create(email: 'member@member.com', password: '123456', password_confirmation: '123456')
member.tasks.create(user_id: member.id, title: 'Member task', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in.')
member_category = member.categories.create(user_id: member.id, name: 'Member category', allow_multiple_tags: true)
member_category.tags.create(category_id: member_category.id, name: 'Member tag')