import express from "express";

const port = process.env.PORT || 3000;
const app = express();

const imagekit = new ImageKit({
  urlEndpoint: 'process.env.IMAGE_KIT_ENDPOINT',
  publicKey: '',
  privateKey: ''
});

app.get("/api/upload",(req,res)=>{
  res.send("it works!")
})

app.listen(port, () => {
  console.log("Server Running on 3000");
});