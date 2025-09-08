import mongoose, { Schema } from "mongoose";
import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body

        const user = await User.create({name, email, password, role})

        const userResponse = {
            id : user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
        res.status(201).json({success: true, message: 'user created', user: userResponse})
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({success: false, message: 'Email is already exists'})
        }

        if(error.name === 'ValidationError'){
            const errors = Object.values(error.errors).map(err => err.message)
            return res.status(400).json({success: false, message: errors})
        }

        res.status(500).json({success: false, message: error.message})
    }
}

export const readUser = async (req, res) => {
    try {
        const users = await User.find().lean()
        const user = users.map((item) => ({
            id: item._id,
            name: item.name,
            email: item.email,
            role: item.role
        }))
        res.status(200).json({success: true, message: user.length ? 'Users fetch successfully' : 'No user found', user})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: 'Invalid user'})
       
        const user = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
        if(!user) return res.status(404).json({message: "User not found"})
         
        res.status(200).json({message: "user updated successfully" , user})    
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({success: false, message: 'Email is already exists' })
        } 

        if(error.name === 'ValidationError'){
            const errors = Object.values(error.errors).map(error => error.message)
            res.status(400).json({success: false, message: errors}) 
        }

        res.status(500).json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({message: 'Invalid user'})

        const user = await User.findByIdAndDelete(id)   
        if(!user) return res.status(404).json({message: 'User not found'})

        res.status(200).json({success: true, message: 'User deleted successfully'})    
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}