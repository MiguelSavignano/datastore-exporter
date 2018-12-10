const fs = require('fs')
const Json2csvParser = require('json2csv').Parser;

class DataStoreExporter {

  // datastore: datastoreInstance
  constructor(datastore){
    this.datastore = datastore
  }

  // filePath: filePath
  // type: csv | json
  async csv(entityName, filePath) {
    const result = await this.fetchDatastoreEntity(entityName)
    this.writeToCsv(filePath, result)
    console.log(`Data exported to: ${filePath}`)
  }

  async json(entityName, filePath) {
    const result = await this.fetchDatastoreEntity(entityName)
    this.writeToJson(filePath, result)
    console.log(`Data exported to: ${filePath}`)
  }

  async fetchDatastoreEntity(entityName) {
    const query = this.datastore.createQuery(entityName)
    const [tasks] = await this.datastore.runQuery(query);
    // const taskKey = task[datastore.KEY];
    // console.log("Task", taskKey.id);
    return tasks
  }

  writeToJson(filePath, listData) {
    fs.writeFileSync(filePath, JSON.stringify(tasks))
  }

  writeToCsv(filePath, listData) {
    const fields = Object.keys(listData[0])
    const json2csvParser = new Json2csvParser({ fields, quote: ''});
    const csv = json2csvParser.parse(listData);
    fs.writeFileSync(filePath, csv)
  }
}

module.exports = DataStoreExporter
module.exports.default = DataStoreExporter
