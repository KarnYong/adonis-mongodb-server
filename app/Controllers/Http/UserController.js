'use strict'

const User = use('App/Models/User')

class UserController {
    async register({ request, auth, response }) {
        try {
            const email = request.input("email")
            const password = request.input("password")
            const fname = request.input("fname")
            const lname = request.input("lname")
            const userExists = await User.findBy('email', email)
            if (userExists) {
                return response.status(400).send({
                    status: 'error',
                    message: 'User already registered'
                })
            }
            let user = new User()
            user.email = email
            user.password = password
            user.fname = fname
            user.lname = lname
            let success = await user.save()
            return response.status(201).json({
                status: 'ok',
                message: 'User is registered',
                success: success,
                UserID: user['_id']
            })
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                debug_error: error.message,
            })
        }
    }
}

module.exports = UserController
