const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('unable to MongoDB connect');
    }
    console.log('connect MongoDB server');
   db.collection('Todos').findOneAndUpdate(
       {_id: new ObjectID("59a4a71b76a8247ecf5c13f8")}, { $set: {
           completed: true
       }}, {returnOriginal: false}).then((result) =>{
    console.log(result);
   })

   db.collection('User').findOneAndUpdate(
    {_id: new ObjectID("59a3c99ccba4a337ac3764f4")}, { $set: {
        name: "Mulugeta", 
        completed: true
    }, $inc: { age: +1 } }, {returnOriginal: false}).then((result) =>{
 console.log(result);
})
   
      
   
    
    //db.close(); 
})