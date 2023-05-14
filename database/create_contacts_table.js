const { pool } = require("./connection");

async function create_contacts_table() {
  try {
    const res = await pool.query(
      "CREATE TABLE twitter (\
        id serial PRIMARY KEY,\
        user_name VARCHAR (50), \
        password VARCHAR (50), \
        email VARCHAR(50),\
        CONSTRAINT non_empty_name CHECK(user_name is not null or password is not null or email is not null));"
     );
      console.log("yessir");
  } catch (error) {
    console.error(error)
  }
}

create_contacts_table();