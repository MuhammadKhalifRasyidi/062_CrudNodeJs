import express from 'express';
import bodyParser from 'body-parser';
import bukuRoute from "./route/buku.js";
import orangRoute from "./route/orang.js";

const port = 8000;

app.use(bodyParser.json());
app.use(express.json());

app.use("/buku", bukuRoute);
app.use("/orang", orangRoute);


app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("JekPool");
});

app.listen(port, () =>
    console.log(
        `Server lari-lari di port : http://localhost:${port}`
    ));
 