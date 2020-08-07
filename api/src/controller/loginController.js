const servive = require('../service/login.service');

class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }

    login(req, res) {
        this.loginService
            .authenticate(req.body)
            .then(user => (user ? res.json(user) : res.status(401).json({ message: 'User not found' })))
            .catch(console.log('orror'));
    };
}

module.exports = new LoginController(servive);