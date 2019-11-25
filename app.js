const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('ok alterado'))

app.listen(3000, () => console.log('Running on 3000'))
