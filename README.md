![CF](http://i.imgur.com/7v5ASc8.png) LAB - Access Control (ACL)
=================================================

## Lab: Class 14

### Author: Alexander White

### Links and Resources
* [PR](https://github.com/alex-white-401-advanced-javascript/lab-14/pull/1)
* [Heroku](https://salty-depths-90813.herokuapp.com/)

#### Documentation
* [jsdoc](./docs/index.html)

### Modules
#### `index.js`
* mongoose.connect

#### `/src/app.js`
* module.exports = { server: app, start:

#### `.src/auth/middleware.js`
* function _authBasic(authString)
* function _authenticate(user)
* function _authError()
* function _authBearer(authString)

#### `/src/auth/router.js`
* authRouter.post('/signup', (req, res, next)
* authRouter.post('/signin', auth, (req, res, next)
* authRouter.post('/key', auth, (req, res, next)

#### `.src/auth/users-model.js`
* users.pre('save', function(next)
* users.statics.createFromOauth = function(email)
* users.statics.authenticateToken = function(token)
* users.statics.authenticateBasic = function(auth)
* users.methods.comparePassword = function(password)
* users.methods.generateToken = function()

#### `/src/auth/router.js`
* authRouter.post('/signup', (req, res, next)
* authRouter.post('/signin', auth, (req, res, next)
* authRouter.post('/key', auth, (req, res, next)


### Setup

#### Running the app
* Clone Repo down
* Create .env file in root directory with PORT and MONGO_URI and SECRET
* `npm i` 
* `npm start`
  
#### Tests
* How do you run tests? `npm test`
* What assertions were made? 
* What assertions need to be / should be made? 
