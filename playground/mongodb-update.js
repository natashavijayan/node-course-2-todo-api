//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
/*  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('597055a9983893a3d2615abd'),
  },{
    $set:{
      completed : true
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });*/

  db.collection('Users').findOneAndUpdate({
    name : 'kukku'
  },{
    $inc : { age : 4 },
    $set : {name : 'natasha'},
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close(); */
});
