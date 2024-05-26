<div align="center">
  <h1>🏕️ AirCamp 🌲</h1>
</div>

<img src="https://github.com/AbhinavSingh95/aircamp/blob/main/GIF/AirCamp.gif"/>

<div align="center">
  <h2>⚙️ Features ⚙️</h2>
</div>

-   Responsive web design (RWD)
-   User authentication (Login/Register/Logout) and authorization (Post/Like/Edit)
-   Flash messages responding to users' interaction
-   Refactored with ES6 and ES7 syntax (eg: async/await)
-   RESTful API

```
-------------------------------------------------------------------------
Normal Routes
-------------------------------------------------------------------------
[Method]  [Route]
GET       /                       Landing page
GET       /login                  Request the user login page
GET       /register               Request the user edit page

-------------------------------------------------------------------------
Users Route
-------------------------------------------------------------------------
[Method]  [Route]
GET       /users                  Fetch all users
POST      /users                  Create new user in database
GET       /users/new              Request the user register page
GET       /users/:id              Show the user information
PATCH     /users/:id              Update user information
DELETE    /users/:id              Delete user information
GET       /users/:id/edit         Request the user edit page

-------------------------------------------------------------------------
Sessions Route
-------------------------------------------------------------------------
[Method]  [Route]
POST      /sessions               Create a session (user login)
GET       /sessions/login         Request the user login page
DELETE    /sessions               Delete a session (user logout)

-------------------------------------------------------------------------
Campgrounds Route
-------------------------------------------------------------------------
[Method]  [Route]
GET       /campgrounds            Fetch all campgrounds
POST      /campgrounds            Create a new campground to database
GET       /campgrounds/new        Request the campground adding page
GET       /campgrounds/:id        Show the campground information
PUT       /campgrounds/:id        Update campground information (all)
PATCH     /campgrounds/:id        Update campground information (part)
DELETE    /campgrounds/:id        Delete a campground
GET       /campgrounds/:id/edit   Request the campground editing page
POST      /campgrounds/:id/likes  Like the campground

-------------------------------------------------------------------------
Comments Route
-------------------------------------------------------------------------
[Method]  [Route]
POST      /campgrounds/:id/comments       Create a new comment
PATCH     /campgrounds/:id/comments/:cid  Update comment
DELETE    /campgrounds/:id/comments/:cid  Delete comment
```

<div align="center">
  <h2>🛠️ Technologies 🛠️</h2>
</div>

## Frontend

-   [Bootstrap](https://getbootstrap.com/)
-   [ejs](https://ejs.co/)

## Backend

-   [express](https://gulpjs.com/)
-   [mongodb](https://webpack.js.org/concepts/)

Check [`package.json`](https://github.com/AbhinavSingh95/aircamp/blob/main/package.json) file for more information.

<div align="center">
  <h2>🏃 Getting Started 🏃 </h2>
</div>

Follow the instructions below to set up the environment and run this project on your local machine.

1. Clone this repository.

```bash
# Clone repository
$ git clone https://github.com/AbhinavSingh95/aircamp
```

2. Install dependencies via NPM or Yarn

```bash
# Install dependencies via npm
$ npm install

# Install dependencies via yarn
$ yarn install
```

3. Run the server with [nodemon](https://nodemon.io/) and open a browser to visit [http://localhost:3000/](http://localhost:3000/).

```bash
# Run server
$ npm run dev
```

<div align="center">
  <h2>📽️ Demo 📽️ </h2>
</div>

Experience [aircamp](https://aircamp-92p9.onrender.com) web app live via [render](https://render.com/)

<div align="center">
  <h2>📝 License 📝 </h2>
</div>

Licensed under the MIT License, Copyright © 2022-present AbhinavSingh95.
