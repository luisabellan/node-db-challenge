"use strict";exports.seed=function(e){return e("project").truncate().then(function(){return e("project").insert([{name:"Smurfs",description:"Fan Site for smurfs lovers",completed:!1},{name:"Blog for Good",description:"Virginia React site",completed:!1},{name:"ChessNoobsters",description:"Learn to play chess with this awesome app",completed:!1}])})};