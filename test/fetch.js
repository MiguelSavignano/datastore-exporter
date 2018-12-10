require('dotenv').config()
const Datastore = require('@google-cloud/datastore');
const DataStoreExporter = require('../DatastoreExporter.js')
const projectId = 'project-example';
const datastore = new Datastore({ projectId });

const datastoreExporter = new DataStoreExporter(datastore)

datastoreExporter.fetchDatastoreEntity("User").then( users => {
  console.log(users)
  // users.map(user => {
  //   // console.log(user)
  //   const userKey = user[datastore.KEY];
  //   console.log("ID:", userKey.id)
  //   console.log("name:", userKey)
  // })

})
