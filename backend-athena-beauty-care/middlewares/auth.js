const jwt = require("jsonwebtoken");


function auth (request, response, next) {

    const token = request.headers["x-auth-token"];

    if(!token) {

        response.status(401).json({msg: "Authorization Denied"});

    } else {

        try {

            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            request.user = decoded;

            next();

        } catch(e) {

            response.status(400).json({msg: "Invalid Token"});
        }
       
    }

}




module.exports = auth;