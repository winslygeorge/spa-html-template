const express = require('express')

// const config = require('./oracleDBManager/dbconfig')
// const dbconnect = require('./oracleDBManager/dbconnect')
const app = express()

// const session = require('express-session')

// const Store = require('express-oracle-session2')(session)


//const postRoute = require('./views/Routes/post')
const getRoute = require('./views/Routes/get')
// const loginRoute = require('./views/Routes/login')
// const susRoute = require('./views/Routes/sus')

const bodyParser = require('body-parser');

app.use(express.json(bodyParser))


app.use(bodyParser.urlencoded({ extended: false })); 
app.use( express.static('views'))
app.set('view engine', 'hbs')

// var options = {

//     user: config.user,
//     password: config.password,
//     connectString: config.connectionString,
//     externalAuth: true,
//     checkExpirationInterval: 900000,// How frequently expired sessions will be cleared; milliseconds.
//     expiration: 86400000,// The maximum age of a valid session; milliseconds.
//     createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist.
//     connectionLimit: 1
// }

// const isAuth = (req, res, next)=>{

//     if(req.session.isAuth){

//         next()
//     }else{

//         res.redirect('/login')
//     }
// }

// setSessionStore()

app.listen(3007, (err)=>{

    if(err) throw err

    console.log('server connected')
})

//functions

// async function setSessionStore(){

//     let connect  =  await dbconnect
//     var oracleStore  = new Store({options}, connect)

//     app.use(session({

//         secret: "winslowgeorgos",
//         resave : false,
//         saveUninitialized: false,
//         store: oracleStore
//     }))

//app.use('/', postRoute)
app.use('/', getRoute)

// app.use('/', loginRoute)

// app.use('/', require('./views/logout'))

//     app.use('/', require('./views/Routes/AddService'))
    
//     app.use('/', require('./views/Routes/serviceupdate'))
//     app.use('/', require('./views/Routes/deletappscomp'))
//     app.use('/', require('./views/Routes/compDiscSus'))
//     app.use('/', require('./views/Routes/userDets'))
//     app.use('/', susRoute)

app.get('/home', (req, res )=>{
   
        // console.log(req.session)
        res.render('home/index', {name: "winslow", subjects:["math", "eng", "kiswahili"]})
    })

// }