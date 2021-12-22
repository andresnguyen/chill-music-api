import { DATABASE_URL } from '../constants/auth.constant'
const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('Connect successfully!!!')
  } catch (error) {
    console.log('Connect failure!!! \n ' + error)
    process.exit()
  }
}

export default connect
 