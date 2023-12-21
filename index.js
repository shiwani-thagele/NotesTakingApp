const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const Note = require('./models/Note')
const app = express()
//middleware 
// app.use(express.json({extended : true}))
app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded())
const port = 3000

mongoose.connect('mongodb+srv://shiwaniThagele:m0cqfQh4U3evjNP6@cluster1.pvydksa.mongodb.net/?retryWrites=true&w=majority')
   .then(() => {
      // connection successful logic
      console.log("Successfully Connected");
   }).catch(err => {
      // handle connection error
      console.error('MongoDB connection error:', err);
   });



//end points to server the HtML
app.get('/', (req, res) => {
  res.sendFile("pages/index.html", {root:__dirname})
})
app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", {root:__dirname})
  })
  app.get('/signup', (req, res) => {
    const {userToken} = req.body;
    res.sendFile("pages/signup.html", {root:__dirname})
  })
  
  // app.route('/signup')
  // .get((req, res) => {
  //   res.sendFile("pages/signup.html", {root:__dirname})
  // })
  // .post(async (req, res) => {
  //   const {userToken} = req.body;
  //   console.log(req.body);
  //   let user = await User.create(req.body);
  //   res.status(200).json({success: true, user: user});
  // });
  app.route('/signup')
  .get((req, res) => {
    res.sendFile("pages/signup.html", {root:__dirname})
  })
  .post(async (req, res) => {
    try {
      const { userToken } = req.body;
      console.log(req.body);
      let user = await User.create(req.body);
      res.status(200).json({ success: true, user: user });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ success: false, error: 'User creation failed' });
    }
  });


  //endpoints for Api's
  app.post('/getnotes', (req, res) => {
    const {userToken} = req.body
    console.log(req.body);
    let user  = User.create(req.body)
    res.status(200).json({success:true,user:user})
  })

  app.post('/login', (req, res) => {
    const {userToken} = req.body
    res.sendFile("pages/signup.html", {root:__dirname})
  })

  // app.post('/signup', async(req, res) => {
  //   const {userToken} = req.body
  //   console.log(req.body);
  //   let user  = await User.create(req.body)
  //   // res.sendFile("pages/signup.html", {root:__dirname})
  //   res.status(200).json({success: true ,user: user})
  // })

  app.post('/addnote', (req, res) => {
    const {userToken} = req.body
    res.sendFile("pages/signup.html", {root:__dirname})
  })
  app.post('/deletenote', (req, res) => {
    const {userToken} = req.body
    res.sendFile("pages/signup.html", {root:__dirname})
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


// m0cqfQh4U3evjNP6
// shiwaniThagele

// mongodb+srv://shiwaniThagele:m0cqfQh4U3evjNP6@cluster1.pvydksa.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://shiwaniThagele:m0cqfQh4U3evjNP6@cluster1.pvydksa.mongodb.net/?retryWrites=true&w=majority