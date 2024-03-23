const jwt = require("jsonwebtoken");
const database = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const Login = async (req, res) => {
    const { Email, Password } = req.body;
    
    if (!Email || !Password) {
        return res.json({ status: "error", error: "Please enter ALL information" });
    } else {
        database.query(`SELECT uEmail, upassword FROM user WHERE uemail = ?`, [Email], async (err, results) => {
            if (err) {
                throw err;
            }

            if (results.length === 0 || !await bcrypt.compare(Password, results[0].upassword)) {
                return res.json({ status: "error", error: "Incorrect Email or Password" });
            } else {


                //  generate a JWT token if needed
                // const token = jwt.sign({ email: Email }, process.env.JWT_SECRET);


                return res.json({ status: "success", success: "User has Logged In" });
            }
        });
    }
};
