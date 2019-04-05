![CF](http://i.imgur.com/7v5ASc8.png) LAB - Access Control (ACL)
=================================================

## Lab: Class 14

### Author: Alexander White

### Links and Resources
* [PR]()

* [Heroku]()

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

#### Requirements
* Install the core bearer authorization system
  [x] middleware.js - Handle the Bearer Header to pull and verify with the token
  [x] users-model.js - Add a bearer authorization method that verifies the token
* Improve the core bearer authorization system…
  [x] Alter the JWT to be time sensitive (valid for 15 minutes)
  [x] Alter the JWT to be single-use
    [] With every authenticated access, re-send a new JWT token as a cookie or header
    [] Disable those that you’ve already authenticated
* Create a Auth Key system
  [] Create a new route: router.post('/key' ... ) that will generate a JWT without an expiration date, and noted to be an auth key (so that it won’t be deleted like a single use token)
  [] Allow users to authenticate using the Auth Key as they would a normal token
  [] Auth Keys should never expire
  [] Auth Keys should be re-usable