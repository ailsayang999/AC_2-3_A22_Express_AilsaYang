//1. Include Express 
const express = require('express')
const app = express()
//require express-handlebars here
const exphbs = require('express-handlebars')

//2. Define server related variables
const port = 3000

//4. express template engine: 設定template engine
app.set("view engine", "handlebars");
app.engine('handlebars', exphbs({defaultLayout :'main'}))

//5. setting static files
app.use(express.static('public'))



//3. setting the route and corresponding response
app.get('/', (req,res)=>{
  res.render('index')
})


//about page
app.get('/about', (req,res)=>{
  res.render("about");
})

//portfolio page 文件夾
app.get("/portfolio", (req, res) => {
  res.render(`portfolio`);
});

//contact page
app.get("/contact", (req, res) => {
  res.render(`contact`);
});

//4. Listen and Start the server
app.listen(port,()=>{
  console.log(`Express is running on http://localhost:${port}`)
})
