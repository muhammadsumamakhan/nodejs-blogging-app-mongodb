const { validate } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const token = req.cookies[cookieName];

        if (!token) {
            return next();
        }

        const userPayload = validate(token);

        if (!userPayload) {
            return next(); 
        }

        req.user = userPayload;
        next();
    };
}

module.exports = {
    checkForAuthenticationCookie
};