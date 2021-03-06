# Gcloud Datastore exporter

Export your google datastore data to csv or json

## Install
```
npm install gcloud-datastore-exporter --save
```

## Usage
```javascript
const Datastore = require('@google-cloud/datastore');
const DataStoreExporter = require('gcloud-datastore-exporter')
const projectId = 'project-example';
const datastore = new Datastore({ projectId });

const datastoreExporter = new DataStoreExporter(datastore)
datastoreExporter.csv("User", "users.csv")
```

## Api

### fetchDatastoreEntity

| Argument      | Type    | Description |
| ------------- | ------- |  ------------- |
| entityName    | String  | datastore entity name
| filePath      | String  | file path to save the

### csv

This method use [json2csv](https://www.npmjs.com/package/json2csv) npm package

| Argument      | Type    | Description |
| ------------- | ------- |  ------------- |
| entityName    | String  | datastore entity name
| filePath      | String  | file path to save the csv
| csvOptions    | Object  | options to parse data see [more](https://www.npmjs.com/package/json2csv#available-options)

### json
| Argument      | Type    | Description |
| ------------- | ------- |  ------------- |
| entityName    | String  | datastore entity name
| filePath      | String  | file path to save the json


### Why?

Following this [guide](https://cloud.google.com/datastore/docs/export-import-entities) Datastore can be exporter to a GCP bucket and import to Bigquery for download in csv.

If you don't have access to GCP bucket or Bigquery this package help you to export data to csv or json files.
