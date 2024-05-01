const express = require("express");
const app = express();
const port =process.env.PORT || 8000;
require("dotenv").config();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))



app.use(express.json());
// app.use(cors);

//mongodb

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@job-portal-mern.jthw7ca.mongodb.net/?retryWrites=true&w=majority`;
//const uri = "mongodb+srv://veenit123:veenit123@cluster0.xbw8ogk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create db
    const db = client.db("mernJobPortal");
    const jobCollections = db.collection("demoJobs")

    //post a job
    app.post("/post-job" , async(req,res) =>{
      const body = req.body;
      body.createAt = new Date();
      // console.log(body);
      const result = await jobCollections.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result);
      }
      else{
        return res.status(404).send({
          message : "can not insert! , try again",
          status : flase
        })
      }

    } )

    //get all the jobs
    app.get("/all-jobs" , async(req,res) => {
      const jobs = await jobCollections.find({}).toArray()
      res.send(jobs);
    });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get("/" , (req,res)=>{
    res.send("helloe broo")
})

app.listen(port , ()=>{
    console.log(`Server started on port ${port}`)
})