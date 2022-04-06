const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
var options = {
    explorer: true
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3, 4, 5])
})
app.get("/api/courses/:id", (req, res) => {
    res.send(req.params.id);
})
const port = process.env.PORT || 5000;
console.log(process.env.PORT)

app.listen(5000, () => {
    console.log("listening on 5000")
})

