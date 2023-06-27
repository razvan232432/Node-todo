const bodyParser = require('body-parser');

const mongoose = require('mongoose')

const mongoURI = "Connection URI";

const connectToMongo = async () => {
 mongoose.connect(mongoURI, await console.log('Connected to mongo Successful')
    );
}

module.exports = connectToMongo

// connect to the  database
mongoose.connect('mongodb://localhost:27017/todo');

//create a  schema - this is like  a blue print

let todoSchema = new mongoose.Schema({
    item: String
});

let Todo = mongoose.model('Todo', todoSchema);

let itemOne = Todo({item: 'buy flowers'}).save((err) => {
    if (err) throw err;
    console.log('item saved')
});


let data = [{item:'get milk'}, {item: 'walk dog'}, {item: 'kick some coding'}];

let  urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
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