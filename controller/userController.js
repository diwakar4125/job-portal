import userModels from "../models/userModels";

export const updateUserController = async(req,res,next) => {
    const {name,email,lastname,location} = req.body;
    if(!name || !email || !lastname || !password){
        next('Please provide all field')
    }
    const user = await userModels.findOne({_id:req.user.userId})
    user.name = name
    user.lastname = lastname
    user.email = email
    user.location= location

    await user.save()
    const token = user.createJWT()
    res.status(200).json({
        user,
        token,
    })
};