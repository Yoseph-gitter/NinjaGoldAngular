const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

app = express();

app.use(express.static(path.join(__dirname, './../client/dist/client'))) ;

var generateRandomRange = function(min, max){
    return Math.floor(Math.random()*(max - min)) + min ;
}

const ninja_playGround =[
    {
        'name': "Farm",
        'goldValue' : 0,
    },
    {
        'name': "House",
        'goldValue': 0
    },
    {
        'name': "Casino",
        'goldValue': 0
    },
    {
        'name': "Cave",
        'goldValue': 0
    }
   
];

//lets define the ninja services 
const context = {
    'messages' : [],
    'ninja_playGround' : ninja_playGround,
    "total_Gold" : 0
};


app.get("/all", function(request, response){
    response.json(context);
})
var idx ={
    "Farm" : 0,
    "House" :1,
    "Casino" : 2,
    "Cave" : 3,
}
app.get("/:place", function(request, response){
    
    var place = request.params.place ;
    console.log(place);
    var len = ninja_playGround.length -1;
   
    //for (i in ninja_playGround){
       // console.log(i);
        if(place === 'Farm'){
            ninja_playGround[idx['Farm']]['goldValue'] = generateRandomRange(2,5)  ;
            console.log("Here ...1");
            context['messages'].push("Ninja Earns "+ ninja_playGround[idx['Farm']]['goldValue'] + " Gold on the " + place) ;
            console.log("Here ...2");
            context['total_Gold']= context['total_Gold'] +  ninja_playGround[idx['Farm']]['goldValue'] ;
            console.log("Here .. 3.");
        }
            
        else if(place === 'House'){
            ninja_playGround[idx['House']]['goldValue'] = generateRandomRange(7,15)  ;
            context['total_Gold']= context['total_Gold'] +  ninja_playGround[idx['House']]['goldValue'] ; 
            context['messages'].push("Ninja Earns "+ ninja_playGround[idx['House']]['goldValue'] + " Gold on the " + place) ;
            }
        
        else if( place === 'Cave'){
            ninja_playGround[idx['Cave']]['goldValue'] = generateRandomRange(5,10)  ;
            context['total_Gold']= context['total_Gold'] +  ninja_playGround[idx['Cave']]['goldValue'] ; 
            context['messages'].push("Ninja Earns " + ninja_playGround[idx['Cave']]['goldValue'] + " Gold on the " + place);
        }
        
        else if( place === 'Casino'){
            ninja_playGround[idx['Casino']]['goldValue'] = generateRandomRange(-100 ,100)  ;
            context['total_Gold']= context['total_Gold'] +  ninja_playGround[idx['Casino']]['goldValue'] ;
            context['messages'].push("Ninja Earns "+ ninja_playGround[idx['Casino']]['goldValue'] + " Gold on the "+  place) ;
        }
    
    response.json(context);

})


app.listen(8000, function(req, res){
    console.log("Running on 8000 ... ");
})