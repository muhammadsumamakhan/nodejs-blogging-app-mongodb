const jwt = require('jsonwebtoken');

const secretKey = "developerkey@123";


function createTokenForUser(user) {
    const payload ={
        _id: user._id,
        email: user.email,
        fullName : user.fullName,
        profileImageUrl: user.profileImageUrl,
        role: user.role,
         loginTime: new Date().toLocaleString("en-PK", {
        timeZone: "Asia/Karachi",
        hour12: true
    })
    
    }

    const token = jwt.sign(payload, secretKey);

    return token;

}


function validate(token) {
    try {
        const payload = jwt.verify(token, secretKey);
        return payload;
    } catch (error) {
        return null;
    }
}



module.exports = {
    createTokenForUser,
    validate
};

