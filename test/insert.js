require('dotenv').config()
const _ = require('lodash')
const Datastore = require('@google-cloud/datastore');

async function bulkSave() {
  const projectId = 'project-example';
  const datastore = new Datastore({ projectId });
  const kind = 'User';
  const taskKey = datastore.key([kind]);

  _.times(1000, async (i) => {
    const task = {
      key: taskKey,
      data: {
        name: `Jhon`,
        age: i,
        login: {
          google: true,
          facebook: false
        },
        emails: {
          google: "example@gmail.com",
        },
        friends: ["Jhon"]
      },
    };
    await datastore.save(task)
    console.log(`Saved ${i}: ${task.key.id}: ${task.data.name}`);
  })
}

bulkSave().catch(console.error);
