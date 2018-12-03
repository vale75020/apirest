import express from 'express'
const UserRouter = express.Router();

import User from '../models/user-model'

UserRouter.get('/', (req, res)=> {
    res.send('coucou')
});

UserRouter.get('/:id', (req, res)=> {
    res.send(req.params.id)
});

UserRouter.post('/', (req, res)=> {
   const user = new User({username: "mathieu", password: "old"})
   user.save((err, result) => {
       if (err) res.send('erreur'+err)
       res.send('valentino'+result)
   })
    res.send(req.body)
});

UserRouter.put('/:id', (req, res)=> {
    res.send(req.params.id)
});

UserRouter.delete('/:id', (req, res)=> {
    res.send("delete")
});

export default UserRouter;