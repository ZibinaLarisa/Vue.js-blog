# Vue, Express, MongoDB, Node.js full-stack JS web application 


<img src="http://vuejs.org/images/logo.png" height="50"> <img src="https://coligo.io/images/express.svg" height="50"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/527px-MongoDB-Logo.svg.png" height="50"> <img src="https://worldvectorlogo.com/logos/nodejs-icon.svg" height="50"> <img src="https://nodejs.org/static/images/logo-light.svg" height="50">


![Node 8](https://img.shields.io/badge/node-8.x.x-green.svg)
![VueJS 2](https://img.shields.io/badge/vuejs-2.5.x-green.svg)
![Webpack 2](https://img.shields.io/badge/webpack-3.6.x-green.svg)

This is a full stack web application based on Node.js, Express, MongoDB and Vue.js as Frontend.

The goal is to create create-read-update-delete (CRUD) web application - a blog which contains all important functions:
- user signup;
- login, 
- token based authentication with JWT and bcrypt;
- password policy;
- create, update, delete posts only if user is logged in.


## Features

**Server-side**
* [x] **[Node.JS](https://nodejs.org)** v8.x.x
* [x] **[Express](https://github.com/expressjs/express)**
* [x] [MongoDB](https://www.mongodb.com/) with [Mongoose](https://github.com/Automattic/mongoose)
* [x] [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
* [x] [joi](https://github.com/hapijs/joi) 
* [x] [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 

**Client-side**
* [x] **[VueJS 2.x](https://github.com/vuejs/vue)**
* [x] [Vuex](https://github.com/vuejs/vuex)
* [x] [Vue-router](https://github.com/vuejs/vue-router)
* [x] [axios](https://github.com/mzabriskie/axios)
* [x] **[Webpack 2](https://github.com/webpack/webpack)**
* [x] [Babel](https://babeljs.io/)
* [x] [vuetify](https://github.com/vuetifyjs/vuetify) 


## Setup

** vue-blog - Terminal A **
```
cd vue-blog
npm install
npm start
```

** Server - Terminal B **
```
cd server
npm install
npm start
```

## Preview

### Login 

![registration](https://user-images.githubusercontent.com/20316294/40074903-a1c66134-5883-11e8-9e3b-6468299a0338.gif)

### Main page after login

![postsscreen](https://user-images.githubusercontent.com/20316294/40074932-b6b9bcda-5883-11e8-84c1-4762d24db3f7.jpg)

### Adding Posts screen

![addpostscreen](https://user-images.githubusercontent.com/20316294/40074950-c9de5e2e-5883-11e8-9654-99189056cb1b.jpg)

### One Post screen

![postscreen](https://user-images.githubusercontent.com/20316294/40075041-f95ea83e-5883-11e8-9f01-598b11d58d15.jpg)

