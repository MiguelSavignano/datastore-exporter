# DataStoreExporter

Export your datastore entities to csv or json

## Usage
```javascript
const Datastore = require('@google-cloud/datastore');
const DataStoreExporter = require('datastore-exporter')
const projectId = 'project-example';
const datastore = new Datastore({ projectId });

const datastoreExporter = new DataStoreExporter(datastore)
datastoreExporter.csv("User", "users.csv")
```

## Api

### fetchDatastoreEntity
This method use [json2csv](https://www.npmjs.com/package/json2csv) npm package

| Argument      | Type    | Description |
| ------------- | ------- |  ------------- |
| entityName    | String  | datastore entity name
| filePath      | String  | file path to save the
| csvOptions    | Object  | options to parse data see [more](https://www.npmjs.com/package/json2csv#available-options)

### csv
| Argument      | Type    | Description |
| ------------- | ------- |  ------------- |
| entityName    | String  | datastore entity name
| filePath      | String  | file path to save the csv

### json
| Argument      | Type    | Description |
| ------------- | ------- |  ------------- |
| entityName    | String  | datastore entity name
| filePath      | String  | file path to save the json
