## Deploying to Heroku

Deploying both back & frontend to 1 Heroku dyno is really tricky. Heroku doesn't allow SQLite3, and have troubles detecting that the app requires BOTH NodeJS + Ruby.

The `heroku-deploy` branch has the necessary changes. You'll need the `Heroku CLI` for the below steps:

```bash
git clone https://github.com/EvitanRelta/cvwo-holiday-assignment.git [REPO_DIR]
cd [REPO_DIR]

# Setting up Heroku
# You'll need to create a Heroku app on their website and
# replace [YOUR_HEROKU_APP_NAME] with your app's name.
heroku git:remote -a [YOUR_HEROKU_APP_NAME]
heroku buildpacks:add -i 1 heroku/nodejs
heroku buildpacks:add -i 2 heroku/ruby
heroku addons:create heroku-postgresql:hobby-dev

# Pushing "heroku-deploy" branch to Heroku
git push heroku heroku-deploy:master

# Heroku doesn't seem to load Ruby when building, thus
# migration can only be done after pushing to Heroku.
heroku run "cd backend && rake db:migrate db:seed"
```