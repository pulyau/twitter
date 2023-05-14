const { pool } = require("./connection");

async function signup_person(username, email, password) {
    try {
        console.log(username, email, password)
        const res = await pool.query(
            "INSERT INTO twitter (user_name, email, password) \
             VALUES ($1, $2, $3)", [username, email, password]
        );
    } catch(error) {
        console.log(error);
    }
    
    
}

module.exports = {signup_person};