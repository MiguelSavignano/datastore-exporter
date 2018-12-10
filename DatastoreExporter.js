const fs = require('fs')
const Json2csvParser = require('json2csv').Parser;

class DataStoreExporter {

  // datastore: datastoreInstance
  constructor(datastore){
    this.datastore = datastore
  }

  async csv(entityName, filePath, csvOptions = {quote: ''}) {
    const result = await this.fetchDatastoreEntity(entityName)
    this.writeToCsv(filePath, result, csvOptions)
    console.log(`Data exported to: ${filePath}`)
  }

  async json(entityName, filePath) {
    const result = await this.fetchDatastoreEntity(entityName)
    this.writeToJson(filePath, result)
    console.log(`Data exported to: ${filePath}`)
  }

  async fetchDatastoreEntity(entityName) {
    const query = this.datastore.createQuery(entityName)
    const [result] = await this.datastore.runQuery(query);
    return result.map(item => {
      const itemKey = item[this.datastore.KEY];
      return {
        id: itemKey && itemKey.id,
        namespace: itemKey && itemKey.namespace,
        kind: itemKey && itemKey.kind,
        ...item
      }
    })

  }

  writeToJson(filePath, listData) {
    fs.writeFileSync(filePath, JSON.stringify(tasks))
  }

  writeToCsv(filePath, listData, options = {quote: ''}) {
    const fields = Object.keys(listData[0])
    const json2csvParser = new Json2csvParser({ fields, ...options });
    const csv = json2csvParser.parse(listData);
    fs.writeFileSync(filePath, csv)
  }
}

module.exports = DataStoreExporter
module.exports.default = DataStoreExporter
