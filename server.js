// 1- require express

const express= require('express')

//2- create instance
const app= express()

//3- middleware body-parser
app.use(express.json())
app.use(function (req, res, next) {
    var date = new Date();
    if(((date.getDay() == 0) || (date.getDay() == 6)) || ((date.getHours() < 9) || (date.getHours()>17))){
        res.redirect('/offlinepage')
        ;
    }
    else{
        next() ;
    }
});

//4-create PORT

const PORT = 5000

//5- create server

app.listen(PORT, (error)=>{
    error ?
    console.log(error): console.log(`server is running on port ${PORT}` )
})



app.set('view engine', 'pug')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/services',(req,res)=>{
    res.render('services')
})