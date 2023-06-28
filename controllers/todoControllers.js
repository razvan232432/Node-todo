const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/todo');

// create a schema - this is like a blueprint
const todoSchema = new mongoose.Schema({
  item: String
});

const Todo = mongoose.model('Todo', todoSchema);

//const data = [{item: 'get milk'}]

let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports =  (app) => {
  app.get('/todo', async (req, res) => {
    try {
      const data = await Todo.find({});
      res.render('todo', { todo: data });
    } catch (err) {
      throw err;
    }
  });
  
  app.post('/todo', urlencodedParser, async (req, res) => {
    try {
      const newTodo = await Todo(req.body).save();
      res.json(newTodo);
    } catch (err) {
      throw err;
    }
  });
  
  app.delete('/todo/:item', async (req, res) => {
    try {
      const data = await Todo.find({ item: req.params.item.replace(/\-/g, " ") }).findOneAndRemove();
      res.json(data);
    } catch (err) {
      throw err;
    }
  })};