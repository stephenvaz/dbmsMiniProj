import express from 'express';
import db from './db.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

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
    const state = req.params.PrisonState;
    const year = req.params.dYear;
    // select sum(noPrisoners), sex as NP from prisoner group by sex;
    // const q = "select sum(noPrisoners) from prisoner where PrisonState = ? and dYear = ?";
    // console.log(req.params.PrisonState);
    // const q = "Select sex, sum(noPrisoners) as npr from Prisoner WHERE PrisonState = 'Goa' and dYear = 2003 GROUP BY sex "
    // const q = "Select sex, sum(noPrisoners) as npr from Prisoner WHERE PrisonState = '" + req.params.PrisonState + "' and dYear = "+req.params.dYear+" GROUP BY sex "
    var q = "Select sex, sum(noPrisoners) as npr from Prisoner " + (state != "All" ? "WHERE PrisonState = '" + state + "'" : "") + (year != "All" ? " and dYear = " + year : "") + " GROUP BY SEX"
    console.log(q)
    // const testVal = [req.params.PrisonState, req.params.dYear];
    db.query(q,(err,data)=>{
        if (err) {
            res.send(err);
        }
        console.log(data);
        return res.send(data);
    })
})

app.get("/crime", (req,res)=>{
    const q = "select distinct ctyp from crime;"
    db.query(q, (err,data)=>{
        if (err) {
            res.send(err);
        }
        console.log(data[0]["ctyp"]);
        // console.log(data.length);
        return res.send(data);
    })
})

app.get("/ageGrp", (req,res)=>{
    const q = "select distinct agegroup from crime;"
    db.query(q, (err,data)=>{
        if (err) {
            res.send(err);
        }
        console.log(data[0]["agegroup"]);
        // console.log(data.length);
        return res.send(data);
    })
})

app.get("/state", (req,res)=>{
    const q = "select distinct PrisonState from crime;"
    db.query(q, (err,data)=>{
        if (err) {
            res.send(err);
        }
        console.log(data[0]["PrisonState"]);
        // console.log(data.length);
        return res.send(data);
    })
})

//crime question

app.get("/crime/:ctyp/:agegroup/:PrisonState", (req, res)=>{
    const q = "select dYear,sum(convicted) as sum from crime where ctyp = ? and agegroup = ? and PrisonState = ? group by(dYear);"
    const testVal = [req.params.ctyp, req.params.agegroup, req.params.PrisonState];
    db.query(q,testVal,(err,data)=>{
        if (err) {
            res.send(err);
            // console.log(err);
        }
        // console.log(data);
        res.send(data);
    });
})


//crime basic question
app.get("/crime/:PrisonState/:dYear", (req, res)=> {
    const state = req.params.PrisonState;
    const year = req.params.dYear;
    // select sum(noPrisoners), sex as NP from prisoner group by sex;
    // const q = "select sum(noPrisoners) from prisoner where PrisonState = ? and dYear = ?";
    // console.log(req.params.PrisonState);
    // const q = "Select sex, sum(noPrisoners) as npr from Prisoner WHERE PrisonState = 'Goa' and dYear = 2003 GROUP BY sex "
    // const q = "Select sex, sum(noPrisoners) as npr from Prisoner WHERE PrisonState = '" + req.params.PrisonState + "' and dYear = "+req.params.dYear+" GROUP BY sex "
    var q = "Select sex, sum(noPrisoners) as npr from Prisoner " + (state != "All" ? "WHERE PrisonState = '" + state + "'" : "") + (year != "All" ? " and dYear = " + year : "") + " GROUP BY SEX"
    console.log(q)
    // const testVal = [req.params.PrisonState, req.params.dYear];
    db.query(q,(err,data)=>{
        if (err) {
            res.send(err);
        }
        return res.send(data);
    })
})


//budget question
app.get("/year", (req,res)=>{
    const q = "select distinct dYear from Budget;"
    db.query(q, (err,data)=>{
        if (err) {
            res.send(err);
        }
        // console.log(data[0]["PrisonState"]);
        // console.log(data.length);
        return res.send(data);
    })
})

app.get("/budgetdata/:PrisonState/:dYear", (req,res)=>{

    const q = "select typ, amt from Budget where PrisonState = ? and dYear = ?;"
    const testVal = [req.params.PrisonState, req.params.dYear];
    
    db.query(q, testVal, (err,data)=>{
        if (err) {
            res.send(err);
            console.log(err);
        }
        // console.log(data[0]["PrisonState"]);
        console.log(data);
        return res.send(data);
    })
})


app.post("/register", (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    console.log(name + " " + username + " " + password);
    const query = "INSERT INTO User (name, username, password) VALUES (?, ?, ?)";
    db.query(query, [name, username, password], (err, data) => {
        if (err) {
            res.send({err: err});
            
        }
        console.log(data)
        res.send({message: "Account Created"});
        
    });
    
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log("Login: "+ username + " " + password);
    const query = "SELECT * FROM user WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, data) => {
        if (err) {
            res.send({err: err});
            
        }
        if(data.length > 0) {
            res.send({message: "Login Successful"});
        }
        else {
            res.send({message: "Wrong username/password combination!"});
        }
        
    });
    
});

app.post("/update", (req, res) => {
    const typ = req.body.typ;
    const amt = req.body.amt;
    const PrisonState = req.body.PrisonState;
    const dYear = req.body.dYear;
    console.log(typ + " " + amt + " " + PrisonState + " " + dYear);
    const query = "UPDATE Budget SET amt = ? WHERE typ = ? AND PrisonState = ? AND dYear = ?";
    db.query(query, [amt, typ, PrisonState, dYear], (err, data) => {
        if (err) {
            res.send({err: err});
            
        }
        console.log(data.length);
        if(data.length > 0) {
            res.send({message: "Update Successful"});
        }
        else {
            res.send({message: "Update Failed"});
        }
        console.log(data);
    });
})
export default app;