import User from "../model/user.model.js";

export const read = async (req, res) => {
    try {
        const users = await User.find()
        if(users.length === 0) return res.status(401).json({message: 'no user found'})
        res.status(401).json({rendor: 'admin/user/index', {layout: 'admin/layouts'}})    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const create = async (req, res) => {
   try {
    const {name, email, password} = req.body
    if(!name || !email || !password) return res.status(400).json({message: 'all field required'})
    
    const existingUser = await User.find({email})
    if(existingUser) return res.status(401).json({message: 'user already exists'})

    const user = new User(req.body) 
    await user.save()
        
    res.status(201).json({message: 'user created successfully', user})    

   } catch (error) {
    res.status(500).json({message: error.message})    
   }
}

export const updateById = (req, res) => {
    res.send("user update")
}

export const deleteById = (req, res) => {
    res.send("user delete")
}
