const jwt = require('jsonwebtoken');

const dbase = [ {  username: 'admin', password: 'admin'} ];

const auth = async ({ username, password }) => {
    const user = dbase.find((user) => 
        user.username === username && user.password === password
    );

    if (user) {
        const token = await jwt.sign({ username }, 'sdshsllllsfdjhfdkhdjhdjf');

        return { token, user };
    }
};

module.exports = { auth };