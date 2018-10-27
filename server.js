var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8081;

var mfp = require('mfp');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.post('/getData',function(req,res){


  // console.log(req.body);


  //  console.log(req.body.date);
  //  console.log(req.body.username);

   var username = req.body.username;

   var date = req.body.date;


 

    mfp.diaryStatusCheck(username, function(status) {
        console.log(status);
       mfp.fetchSingleDate(username, date, 'all', function(data){
        res.json({success: true,data:data});
    },err=>{
      res.json({success: false,error:err});
    }); 
    
   });
  

  
});



app.listen(PORT,function(){
	console.log('Express listening on port '+ PORT + '!');
})

