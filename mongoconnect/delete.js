const {MongoClient, ObjectID} = require('mongodb'); 


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
       return console.log('unable to MongoDB connect');
    }
    console.log('connect MongoDB server');
    //delete many, promise
   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
       console.log(result); 

   })
   //delete one , delete the first occurance of the passed argument
   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
    console.log(result); 

})
//findOneAndDelete
db.collection('Todos').findOneAndDelete({completed: true}).then((result) =>{
    console.log(result); 

})
   
    
    //db.close(); 
})