require('dotenv').config()
const _ = require('lodash')
const Datastore = require('@google-cloud/datastore');

async function bulkSave() {
  const projectId = 'project-example';
  const datastore = new Datastore({ projectId });
  const kind = 'Task';
  const taskKey = datastore.key([kind]);

  _.times(1000, async (i) => {
    const task = {
      key: taskKey,
      data: {
        description: `Task ${i}`,
      },
    };
    await datastore.save(task)
    console.log(`Saved ${i}: ${task.key.id}: ${task.data.description}`);
  })
}

bulkSave().catch(console.error);
