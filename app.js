
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
	  res.send('Hello World!')
})

app.get('/tea', (req, res) => {
	res.set('X-full-stack', '4life').status(418).send('I prefer coffee')
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})



