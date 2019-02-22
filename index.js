const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile')

const db = knex(knexConfig.development);
const server = express();
server.use(express.json());


server.post('/projects', async (req, res) => {
    try{
      const [id] = await db('projects').insert(req.body);
      const project = await db('projects').where({id}).first();
      res.status(200).json(project);
    }
    catch(error){
     res.status(500).json(error);
    }
});
server.post('/actions', async (req, res) => {
    try{
      const [id] = await db('actions').insert(req.body);
      const action = await db('actions').where({id}).first();
      res.status(200).json(action);
    }
    catch(error){
     res.status(500).json(error);
    }
});

const port = process.env.PORT || 5000;
server.listen(port, ()=> console.log(`\n Running on ${port}\n`))