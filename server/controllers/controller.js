import User from "../model/schema.js";
import validateUser from "../validator/joi.js";
import bcrypt from "bcrypt"

export const addUser = async (req , res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password , 10)
        const hashedConfirmPassword = await bcrypt.hash(req.body.confirmPassword , 10)
        const { error, value } = validateUser(req.body);
        if(error) {
            return res.status(400).json(JSON.parse(JSON.stringify(error.message)))
        }
        const userExists = await User.findOne({username: req.body.username})
        const emailExists = await User.findOne({email: req.body.email})

        if(userExists) {
            return res.status(400).json('user already exists!')
        }else if(emailExists){
            return res.status(400).json('Email already taken!')
        }else{
            const user = new User({
                username: req.body.username,
                email:req.body.email,
                tel:req.body.tel,
                password:hashedPassword,
                confirmPassword:hashedConfirmPassword
            })
            await user.save(user)
        }
        return res.status(201).json(req.body.username)
    } catch (error) {
       return res.status(500).json(error)
    }
}

export const loginValidate = async (req , res) =>{
    const email = req.body.email;
    const password = req.body.password;


  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(401).send('Invalid email or password');
      return;
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      res.status(401).send('Invalid email or password');
      return;
    }
    if(passwordsMatch){
      return res.status(201).json(req.body.email)
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
}