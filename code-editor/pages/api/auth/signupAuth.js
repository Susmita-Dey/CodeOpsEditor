import connect from "../../../lib/mongodb";
import User from "../../../model/user"

connect()

export default async function handler(req,res){
    
        if (req.method === "POST") {
            if (!req.body) return res.status(400).json({ error: "Data is missing" })
    
            const { fname, email, password } = req.body
    
            const userExists = await User.findOne({ email })
    
            if (userExists) {
                return res.status(409).json({ error: "User Already exists" })
            }
            else {
                if (password.length < 6)
                    return res.status(409).json({ error: "Password should be 6 characters long" })
                    const user = await User.create({fname, email, password});
    
                    return res.status(201).json({
                        success: true,
                        user
                    }, res.redirect('/writecode'))
            }
        }
        else {
            res.status(405).json({ error: "Method Not Allowed" })
        }
    }