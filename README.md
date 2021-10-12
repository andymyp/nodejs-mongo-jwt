# Node Js Backend

This project uses:

- Node Js
- Express
- MongoDB
- JWT Authentication
- Cloudinary
- Joi Validation
- SwaggerUI
- And more

## Installation

```bash
git clone https://github.com/andymyp/nodejs-mongo-jwt.git
```

```bash
cd nodejs-mongo-jwt
```

```bash
npm install
```

#### Setup config file `.env`

```text
# Express config
PORT=8080
HOST=localhost
HOST_URL=http://localhost:8080

# cloudinary config
CLOUDINARY_CLOUD_NAME=dm3gc8ioi
CLOUDINARY_API_KEY=597516759279147
CLOUDINARY_API_SECRET=9wD6Ck4ryUBJ-SSfYOoWOElm_TE
```

Change to your Express and Cloudinary config.

#### Setup database `startup > db.js`

- [Create MongoDB](https://www.mongodb.com/cloud/atlas)
- Change this to your MongoDB connection url.

```javascript
const CONNECTION_URL =
  "mongodb+srv://andymyp:15041997myp@crud.xcu9g.mongodb.net/course?retryWrites=true&w=majority";
```

## Local Usage

```bash
npm start
```

## Online Usage with Heroku

- Clone this repository to your repository with:

```bash
git remote set-url origin <url-of-your-repository>
```

```bash
git push -u origin main
```

- [Login](https://id.heroku.com/login) or [Register](https://signup.heroku.com/) on Heroku
- On [dashboard](https://dashboard.heroku.com/apps) click `Create new app` and create app
- In `Deployment method` choose `GitHub` and connect to your github repository
- `Enable automatic deploy` and click `Deploy Branch`

## Documentation

- [View Documentation](https://course-backend-node.herokuapp.com)
- Base url API [https://course-backend-node.herokuapp.com/api](https://course-backend-node.herokuapp.com/api)
