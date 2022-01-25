# CVWO Holiday Assignment

A task management web-application for NUS CVWO Holiday Assigment.

Name: &nbsp; Tan Zong Zhi, Shaun (A0235143N)

Deployed at: &nbsp; [`https://tododex.herokuapp.com/`](https://tododex.herokuapp.com/)

<br><br>

## Running locally

### Requirements

- Yarn
- NodeJS 17
- Ruby 3.0.3
- SQLite3 &nbsp; _(for Ruby on Rails database)_

<br>

### Setup & run development server

I've included a setup script in the root `package.json` for easy setup. Just run `setup`, then `start` to start development server.

The app will be accessible at `http://localhost:3002`

- Port 3000 is the REST API backend
- Port 3001 is the raw NodeJS frontend
- Port 3002 is the proxy that routes "/api" requests to Port 3000<br> and any other paths to Port 3001


```bash
git clone https://github.com/EvitanRelta/cvwo-holiday-assignment.git [REPO_DIR]
cd [REPO_DIR]
yarn run setup
yarn start
# App accessible at http://localhost:3002
```

<br>

### Building & serving server

The `build` script does both the setup & build. The built static app can then be served via `serve` script.

```bash
git clone https://github.com/EvitanRelta/cvwo-holiday-assignment.git [REPO_DIR]
cd [REPO_DIR]
yarn run build
yarn run serve
# App accessible at http://localhost:3002
```

<br><br>

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

<br><br>

## Basic Usage

### New Tasks/Categories/Tags

To add new tasks/categories/tags, click on the `+` circle icon on bottom right:

<p align="center">
    <img src="./readme_assets/new_task_category_tag.jpg?raw=true" width="200px">
</p>

## Edit Tasks/Categories

To edit tasks and categories, just **double click** them.

<p align="center">
    <img src="./readme_assets/task.jpg?raw=true" width="400px">
</p>

<p align="center">
    <img src="./readme_assets/click_on_category.jpg?raw=true" width="200px">
</p>

<br>

Alternatively for tasks, you can click on the task and it will show the `Add Tag`, `Edit` and `Delete` buttons:

<p align="center">
    <img src="./readme_assets/edit_task.jpg?raw=true" width="300px">
</p>

<br><br>

The paragraphs below is included in the final writeup pdf.

<br><br>

# My Journey

I started out with only a little experience in `React` and `git`. 

During the development of this app, I learnt and used:

- <img src="https://git-scm.com/favicon.ico" width="15px">&nbsp; **Git**
- <img src="https://rubyonrails.org/assets/images/favicon.ico" width="15px">&nbsp; **Ruby on Rails** &nbsp; _(with Gem – `devise_token_auth`)_
- <img src="https://reactjs.org/favicon.ico" width="15px">&nbsp; **React**
&emsp;&emsp;&emsp;&emsp;
_(with Component Library – `MUI`)_
- <img src="https://redux.js.org/img/favicon/favicon.ico" width="15px">&nbsp; **Redux** &emsp;&emsp;&emsp;&nbsp;&nbsp; _(with Middleware – `Redux Thunk`)_

&nbsp;

along with some tools for testing / prototyping:

- <img src="https://st-ar.cdn.postman.com/images/favicon-1-16.png" width="15px">&nbsp; **Postman** &nbsp; _(to test my API)_
- <img src="https://static.figma.com/app/icon/1/favicon.png" width="15px">&nbsp; **Figma**
&emsp;&nbsp;&nbsp;
_(to prototype frontend styling)_

<br><br>

## Things I learnt

### **1.** Separate **backend** and **frontend** into 2 repositories

When something goes wrong in the **backend**, <br>it was hard to find the correct **backend** commit to `git checkout` to when they're all sandwiched between **frontend** commits.

<p align="center">
    <img src="./readme_assets/sandwiched_commits.jpg?raw=true" width="500px">
</p>

<br><br>

### **2. Don't** always use latest versions

I had to redo my **backend** twice due to incompatibilities between the latest versions of `Rails`, `Ruby` and the Rails gem – `devise`.

- `Rails 7.0.0`&nbsp; incompatible with&nbsp; `Ruby 3.1.0`
<br>_(https://github.com/rails/rails/issues/43998)_
- `Rails 7.0.0`&nbsp; API-only App incompatible with&nbsp; `Devise 4.8.1` 
<br>_(https://github.com/heartcombo/devise/issues/5443)_

<p align="center">
    <img src="./readme_assets/redo_backend.jpg?raw=true" width="550px">
</p>

<br>

Moreover, using the latest versions meant a lot of older online tutorials were too outdated to follow.

- Rails gem `simple_token_authentication` mentioned in a YouTube [Rails API Tutorial](https://www.youtube.com/watch?v=lgdUqtw4weg&t=631s) didn't support `Rails 7`
<br>_(https://github.com/gonzalo-bulnes/simple_token_authentication/issues/385)_

<br><br>

### **3.** Look for **libraries / resources** that have already done what you need

I tried creating the `React` frontend from scratch via `yarn add react react-dom`, before realising I needed a bundler like `Webpack`.

Then I spend an entire day configuring `Webpack` with the required loaders and plugins _(eg. `css-loader`, `html-webpack-plugin`)_, <br>failing to get it working, and got frustrated.

Before finally, starting over with `yarn create react-app`.

<br><br>


## Typescript

It’s my first time using Typescript, and coming from a mostly Javascript (dynamically typed) background, it was initially quite hard to transition and get used to.

But by the end, I found it really helpful, especially when renaming and changing functions. It shows me where/how things break immediately when I make a radical change, rather than having to find out 5 commits later.

It also helped a lot how Typescript shows me the parameter types that libraries expect me to give, rather than having to check the documentation every 10s.

<br><br>

## Redux

Definitely a lot of boilerplate for simple things. But it’s nice to not have to keep lifting the state up, and end up with tons of props on the container component.

## Ruby on Rails


Rails is by far the most difficult of all the tools to learn. Sometimes, documentations (especially ones geared towards beginners) are rather lacking.
Sometimes Rails names their variables/files in camelCase, other times in hyphen-case. Also, “rails db:reset” doesn't work on Windows. (https://github.com/rails/rails/issues/31589)
Coupled with various bugs and incompatibility between the latest versions of Ruby, Rails and its gem – Devise, it was really difficult for me to grasp.

