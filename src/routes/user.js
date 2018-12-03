import express from 'express'
const UserRouter = express.Router();

import User from '../models/user-model'

const users = [{"id":1001, "username":"bruce.wayne@wayne-entreprise.com", "createdAt":"2018-01-12T23:00:00.000Z", "firstname":"Bruce", "lastname":"Wayne", "avatarUrl":"https://images.forbes.com/media/lists/fictional/2011/bruce-wayne_197x282.jpg", "address":{"city":"Gotham" } }, {"id":1002, "username":"c.k@daily-planet.com", "createdAt":"2018-30-11T23:00:00.000Z", "firstname":"Clark", "lastname":"Kent", "avatarUrl":"https://resize-parismatch.ladmedia.fr/r/,600,forcey/img/var/news/storage/images/paris-match/culture/medias/l-evolution-physique-des-stars-de-lois-et-clark-les-nouvelles-aventures-de-superman-905795/dean-cain-clark-kent-superman/9605673-1-fre-FR/Dean-Cain-Clark-Kent-Superman.jpg", "address":{"city":"Metropolis" } }, {"id":1003, "username":"barry.allen@starlabs.com", "createdAt":"2018-29-11T23:00:00.000Z", "firstname":"Barry", "lastname":"Allen", "avatarUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBwA2efztaIA7oJsn1f9Nswj2QuHTs7feck9Jpd-d6uJ9W5yYdw", "address":{"city":"CentralCity" } } ]

UserRouter.get('/', (req, res)=> {
    res.json(users);
});

UserRouter.get('/:id', (req, res)=> {
    res.json(users[req.params.id])
});

UserRouter.post('/', (req, res) => {
		users.push(req.body);
		res.json(users[users.length-1]);
   /* let user = new User({username: "mathieu", password: "old"})
   user.save()
		.then(result  => {
       res.send('valentino'+result)
   })
	.catch(err => {
			res.send(err)
	}) */
});

UserRouter.put('/:id', (req, res)=> {
		users[req.params.id] = req.body; 
    res.send(users[req.params.id])
});

UserRouter.delete('/:id', (req, res)=> {
	users.splice(req.params.id, 1);
  res.send("nothing")
});

export default UserRouter;
