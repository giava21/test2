const express = require("express")
const app = new express()
const port = 8000

app.get("/", (req,res) => {
  query = req.query
  let lang = req.get("accept-language").substr(0,2)
  let computer = req.get("user-agent").substr(13,25)
  if (lang="it"){
    if (computer.substr(17,8) === "Mac OS X"){
      res.send("Dio te stradora " + query.user + "! Stai usando un Mac.")
    } else if (computer.substr(7,7) === "Android"){
      res.send("Stai usando Android. Bravo " + query.user + "!")
    } else if (computer.substr(5,5) === "Linux"){
      res.send("Stai usando Linux. Bravo " + query.user + "!")
    } else {
      res.send(query.name + " bruto marso che no te si altro.")
    } 
  } else{
    if (computer.substr(17,8) === "Mac OS X"){
      res.send("Very very good" + query.user + "! You are using a Macintosh.")
    } else if (computer.substr(7,7) === "Android"){
      res.send("You are using an Android device " + query.user + "!")
    } else if (computer.substr(5,5) === "Linux"){
      res.send("You are using a Linux device " + query.user + "!")
    } else {
      res.send(query.name + " not good: you are not using a Mac or an Android or a Linux device.")
    } 
  }
})

app.get("/info", (req,res) => {
  let query = req.query
  let lang = req.get("accept-language").substr(0,2)
  if (lang="it"){
    res.send(query.user + " hai " + query.age + " anni e sei nato a " + query.birthplace +".")
  } else{
    res.send(query.user + ", you are " + query.age + " years old and you are born in " + query.birthplace +".")
  }
})

app.listen(port, () => console.log("App listening at port ", port))