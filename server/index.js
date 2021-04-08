const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

app.use(cors());//cros-origin resource sharing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send({name:'Ben',location:'Manchester',
    pets:[{type:'Dog',name:'Jeff'}]
});
});
app.post('/signup',(req,res)=>{
    console.log(req.body);
    res.send('index');

});

app.listen(3000,()=>{
    console.log("http://localhost:3000");
});