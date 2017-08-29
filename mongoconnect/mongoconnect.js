var MongoClient = require('mongodb').MongoClient; 


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('unable to MongoDB connect');
    }
    console.log('connect MongoDB server');
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) =>{
        if(err){
            return console.log('Unable to insert data'); 
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });
    db.collection('User').insertOne({
        name: 'Late to sleep',
        age: 35,
        location: 'Uppsala',
        completed: false
    }, (err, result) =>{
        if(err){
            return console.log('Unable to insert data'); 
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });
    
    db.close(); 
})