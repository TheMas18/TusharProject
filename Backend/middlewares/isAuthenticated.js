const jwt = require('jsonwebtoken');

const isAuthenticated = async(req, res, next) => {
    const headers = req.headers;
    const token = headers.authorization.split(" ")[1];

    const verifyToken = jwt.verify(token, "anykey", (err, decoded) => {
        if(err){
            return false;
        }else{
            return decoded;
        }
    });
    //Saving the user in req object so that it is available in our pages
    if(verifyToken){
        req.user = verifyToken.id;
        next();
    }else{
        const err = new Error("Session expired. PLease login again.");
        next(err);
    }
};

module.exports = isAuthenticated;
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'anykey');
      req.user = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
});

module.exports = protect;