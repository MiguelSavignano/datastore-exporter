const fs = require('fs')
const Json2csvParser = require('json2csv').Parser;

const fetchDatastoreEntity = async (datastore, entityName) => {
  const query = datastore.createQuery(entityName)
  const [tasks] = await datastore.runQuery(query);
  // const taskKey = task[datastore.KEY];
  // console.log("Task", taskKey.id);
  return tasks
}
module.exports.fetchDatastoreEntity = fetchDatastoreEntity

const writeToJson = (filePath, listData) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks))
}
module.exports.writeToJson = writeToJson

const writeToCsv = (filePath, listData) => {
  const fields = Object.keys(listData[0])
  const json2csvParser = new Json2csvParser({ fields, quote: ''});
  const csv = json2csvParser.parse(listData);
  fs.writeFileSync(filePath, csv)
}
module.exports.writeToCsv = writeToCsv

// datastore: datastoreInstance
// filePath: filePath
// type: csv | json
const dataStoreExporter = async (datastore, entityName, filePath, type) => {
  const result = await fetchDatastoreEntity(datastore, entityName)
  if (type == "csv") {
    writeToCsv(filePath, result)
    console.log(`Data exported to: ${filePath}`)
  } else if (type == "json") {
    writeToJson(filePath, result)
    console.log(`Data exported to: ${filePath}`)
  }
}

module.exports = dataStoreExporter
module.exports.default = dataStoreExporter
