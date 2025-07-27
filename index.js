const express = require('express')
const app = express()
const PORT = 9090
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});