
const messages = [
   {
     text: "Hi there!",
     user: "Minh",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

const express = require('express');
const router = express.Router();




/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});


router.get("/new", (req, res, next) => {
  res.render("form")
})


router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorName,  
    added: new Date()
  })
  res.redirect("/")
})

module.exports = router;
