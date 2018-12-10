require('dotenv').config()
const Datastore = require('@google-cloud/datastore');
const datastoreExporter = require('../datastoreExporter.js')
const projectId = 'project-example';
const datastore = new Datastore({ projectId });

datastoreExporter(datastore, "Task", "tasks.csv", "csv")
