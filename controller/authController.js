import { token } from "morgan";
import userModels from "../models/userModels.js";

export const registerController = async (req,res,next) =>{
    
         const {name,email,password} = req.body
         // validate
         if(!name){
            next("Name is required")
         }
         if(!email){
            next("Email is required")
         }
         if(!password){
            next("Password is required")
         }

         const exisitingUser = await userModels.findOne({email})
         if(exisitingUser){
            next("Email Already Register Please Login")
         }
         const user = await userModels.create({name,email,password})
         //token
         const token = user.createJWT();
         res.status(201).send({
            success:true,
            message:'User Created successfully',
            user:{
               name:user.name,
               lastname:user.lastname,
               email:user.email,
               location:user.location

            },
            token,
         });
    
};
export const loginController = async (req,res,next) =>{
   const {email,password} = req.body;
   //validation
   if(!email || !password){
      next('Please provide all field')
   }
   //find user by email
   const user =  await userModels.findOne({email}).select("+password");
    if(!user){
      next('Invalid Username or password')
    }
    //comapare password
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
      next('Invalid username or password')
    }
    user.password = undefined;
    const token = user.createJWT()
    res.status(200).json({
      success:true,
      message:'Loging successfully',
      user,
      token,
    })

};
