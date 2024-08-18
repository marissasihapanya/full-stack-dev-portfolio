const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

const crypto = require('crypto');
const jwt = require('jsonwebtoken');

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJWT = function() {
    return jwt.sign(
        {
            // Payload for our JSON Web Token
            _id: this._id,
            email: this.email,
            name: this.name,
        },
        process.env.JWT_SECRET, // SECRET stored in .env file
        {expiresIn: '1h'} // Token expires an hour from creation
        
    );
};

mongoose.model('users', userSchema);

const User = mongoose.model('users', userSchema);
module.exports = User;

