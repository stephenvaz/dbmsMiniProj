import express from 'express';
import db from './db.js';
import cors from 'cors';
const app = express();
app.use(cors());

app.listen(6969, () => {
    console.log('Server started on port 6969');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    // res.send('Test route');
    const query = 'SELECT * FROM Budget';
    db.query(query, (err, data) => {
        if (err) {
            res.send(err);
        }
        return res.send(data);
    })
})

app.get("/test2", (req, res)=>{
    const query = "Select * from Budget where PrisonState = (?)";
    const testVal = "Delhi";
    db.query(query,testVal, (err,data)=>{
        if (err) {
            res.send(err);
        }
        return res.send(data);
    })
})

app.get("/test3/:PrisonState/:dYear/:sex", (req, res)=> {
    const q = "select sum(noPrisoners) from prisoner where PrisonState = ? and dYear = ? and sex = ?";
    const testVal = [req.params.PrisonState, req.params.dYear, req.params.sex];
    db.query(q,testVal,(err,data)=>{
        if (err) {
            res.send(err);
        }
        // const val = JSON.parse(JSON.stringify(data));
        console.log(data[0]["sum(noPrisoners)"]);
        // console.log(data);
        return res.send(data);
    })
})

app.get("/test4/:PrisonState/:dYear", (req, res)=> {
    // select sum(noPrisoners), sex as NP from prisoner group by sex;
    // const q = "select sum(noPrisoners) from prisoner where PrisonState = ? and dYear = ?";
    const q = "select sum(noPrisoners) as npr, sex from prisoner " + (req.params.PrisonState == "All" ? "" : "having PrisonState = `${req.params.PrisonState}` ") + (req.params.dYear == null ? "All" : "having dYear = `${req.params.dYear}` ")
    // const testVal = [req.params.PrisonState, req.params.dYear];
    db.query(q,(err,data)=>{
        if (err) {
            res.send(err);
        }
        return res.send(data);
    })
})
