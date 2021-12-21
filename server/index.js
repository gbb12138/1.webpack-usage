let express = require('express');
const app = express();
app.get('/users', (req,res) => {
    res.json([{id: 1, name: 'aa'}])
})
app.listen(3000);
