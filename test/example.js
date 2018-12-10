require('dotenv').config()
const Datastore = require('@google-cloud/datastore');
const DataStoreExporter = require('../DatastoreExporter.js')
const projectId = 'project-example';
const datastore = new Datastore({ projectId });

const datastoreExporter = new DataStoreExporter(datastore)
datastoreExporter.csv("User", "users.csv")
