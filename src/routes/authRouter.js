import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/signin', async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) return res.status(400).json({message: "Не заполнен email или password"})
        
        const user = await User.findOne({where: {email}});

        if(!user) return res.status (400).json({message: "Email or password doesn't exist"})
        const isValidPass = await bcrypt.compare(password, user.password);

        if (isValidPass) {
            delete user.dataValues.password;
            req.session.user = user;
            return res.sendStatus(200);
        }
        return res.status(400).json({message: "Email or password doesn't exist"})
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
})

export default authRouter;