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

## Local Installation

```bash
git clone https://github.com/andymyp/nodejs-mongo-jwt.git
```

```bash
cd nodejs-mongo-jwt
```

```bash
npm install
```

## Setup config file `.env`

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

## Setup database `startup > db.js`

```javascript
const CONNECTION_URL =
  "mongodb+srv://andymyp:15041997myp@crud.xcu9g.mongodb.net/course?retryWrites=true&w=majority";
```

Change to your MongoDB connection url.

## Local Usage

```bash
npm start
```
