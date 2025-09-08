import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: function (value) {
              if(value.startsWith('$2b$')) return true;
              return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)   
            },
            message: 'Password must have at least 8 characters, including uppercase, lowercase, number and special character'
        }
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'author'],
            message: 'Role must be either admin or author'
        },
        default: 'author',
        required: true
    }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

userSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate()
    if(update.password){
        update.password = await bcrypt.hash(update.password, 12)
        this.setUpdate(update)
    }    
    next()
})

const User = model('User', userSchema)
export default User;