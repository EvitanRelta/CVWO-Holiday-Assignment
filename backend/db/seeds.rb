# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create(email: 'admin@admin.com', password: '123456', password_confirmation: '123456', nickname: 'Mr. Admin')
admin_category = admin.categories.create(user_id: admin.id, name: 'Location type', allow_multiple_tags: true)
admin_tag = admin_category.tags.create(category_id: admin_category.id, name: 'Work')
admin_task = admin.tasks.create(user_id: admin.id, title: 'Add CRON job to backend', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
admin_task.tags << admin_tag

tag_2 = admin_category.tags.create(category_id: admin_category.id, name: 'Home')
admin_task.tags << tag_2

admin_category_2 = admin.categories.create(user_id: admin.id, name: 'Urgency', allow_multiple_tags: true)
tag_3 = admin_category_2.tags.create(category_id: admin_category_2.id, name: 'Not urgent')
admin_task.tags << tag_3

task_2 = admin.tasks.create(user_id: admin.id, title: 'Integrate with Google calendar', description: 'Sed risus pretium quam vulputate dignissim. Amet volutpat consequat mauris nunc congue. Et tortor consequat id porta nibh. Fames ac turpis egestas sed. Massa placerat duis ultricies lacus sed turpis. Velit egestas dui id ornare arcu odio ut sem. Id nibh tortor id aliquet lectus. Varius duis at consectetur lorem donec massa sapien faucibus. Sagittis vitae et leo duis. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Ut tristique et egestas quis ipsum suspendisse. Nulla malesuada pellentesque elit eget gravida cum. Interdum velit laoreet id donec ultrices. Eu augue ut lectus arcu. Proin nibh nisl condimentum id venenatis a condimentum. Faucibus in ornare quam viverra orci sagittis eu. Duis convallis convallis tellus id interdum velit laoreet id donec. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Porttitor leo a diam sollicitudin tempor id eu.')
task_2.tags << admin_tag

member = User.create(email: 'member@member.com', password: '123456', password_confirmation: '123456')
member.tasks.create(user_id: member.id, title: 'Member task', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in.')
member_category = member.categories.create(user_id: member.id, name: 'Member category', allow_multiple_tags: true)
member_category.tags.create(category_id: member_category.id, name: 'Member tag')