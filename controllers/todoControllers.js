const bodyParser = require('body-parser');

const mongoose = require('mongoose')

// connect to the  database
mongoose.connect('mongodb://localhost:27017/todo');

//create a  schema - this is like  a blue print

let todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo', todoSchema);
const createAndSaveItem = async () => {
    const itemOne = new Todo({ item: 'buy flowers' });
    
    try {
      await itemOne.save();
    } catch (err) {
      throw err;
    }
  
  
  try {
    await createAndSaveItem();
  } catch (err) {
    done(err);
  }
};
let  urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', {todo: data});
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });    
    
    app.delete('/todo/:item', (req, res) => {
        data = data.filter((todo) =>{
            return todo.item.replace(/ /g, '-') !== req,params.items
        })
        res.json(data)
    });



};