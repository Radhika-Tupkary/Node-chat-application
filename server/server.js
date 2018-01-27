const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
let app = express();

app.use(express.static(publicPath));

const port = process.env.PORT || 3000

console.log(publicPath);
console.log(__dirname + '/../public');



app.listen(port, () => {
   console.log(`Server is running on port ${port}!`);
});