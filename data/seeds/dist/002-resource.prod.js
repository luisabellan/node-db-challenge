"use strict";exports.seed=function(e){return e("resource").truncate().then(function(){return e("resource").insert([{name:"GitHub Pro Account",description:"Fan Site for smurfs lovers"},{name:"A meeting room",description:"Room for meetings"},{name:"Computer",description:"Computer to make awesome projects"}])})};