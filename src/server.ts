import cluster from 'cluster'
import os from 'os'

import { app } from './app'

const PORT = process.env.PORT || 3001

const cpus = os.cpus().length

if (process.env.NODE_ENV === 'production') {
  if (cluster.isPrimary) {
    for (let i = 0; i < cpus; i++) {
      cluster.fork()
    }
  } else {
    app.listen(PORT, () => {
      console.log(`🚀 server ${process.pid} @ http://localhost:${PORT}`)
    })
  }
} else {
  app.listen(PORT, () => {
    console.log(`🚀 server @ http://localhost:${PORT}`)
  })
}
