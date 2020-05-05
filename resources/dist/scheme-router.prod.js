"use strict";var express=require("express"),Schemes=require("./project-model"),router=express.Router();router.get("/",function(e,t){Schemes.find().then(function(e){t.json(e)}).catch(function(e){t.status(500).json({message:"Failed to get schemes"})})}),router.get("/:id",function(e,t){var s=e.params.id;Schemes.findById(s).then(function(e){e?t.json(e):t.status(404).json({message:"Could not find scheme with given id."})}).catch(function(e){t.status(500).json({message:"Failed to get schemes"})})}),router.get("/:id/steps",function(e,t){var s=e.params.id;Schemes.findSteps(s).then(function(e){e.length?t.json(e):t.status(404).json({message:"Could not find steps for given scheme"})}).catch(function(e){t.status(500).json({message:"Failed to get steps"})})}),router.post("/",function(e,t){var s=e.body;Schemes.add(s).then(function(e){t.status(201).json(e)}).catch(function(e){t.status(500).json({message:"Failed to create new scheme"})})}),router.post("/:id/steps",function(e,t){var s=e.body,n=e.params.id;Schemes.findById(n).then(function(e){e?Schemes.addStep(s,n).then(function(e){t.status(201).json(e)}):t.status(404).json({message:"Could not find scheme with given id."})}).catch(function(e){t.status(500).json({message:"Failed to create new step"})})}),router.put("/:id",function(e,t){var s=e.params.id,n=e.body;Schemes.findById(s).then(function(e){e?Schemes.update(n,s).then(function(e){t.json(e)}):t.status(404).json({message:"Could not find scheme with given id"})}).catch(function(e){t.status(500).json({message:"Failed to update scheme"})})}),router.delete("/:id",function(e,t){var s=e.params.id;Schemes.remove(s).then(function(e){e?t.json({removed:e}):t.status(404).json({message:"Could not find scheme with given id"})}).catch(function(e){t.status(500).json({message:"Failed to delete scheme"})})}),module.exports=router;