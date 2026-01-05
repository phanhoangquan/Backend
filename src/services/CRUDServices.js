const connection = require('../config/database');

const getAllUsers = async () => {
   let [results, fields] = await connection.query('SELECT * FROM User');
   return results;
};

const createNewUser = async (email, name, city) => {
   let [results, fields] = await connection.query(
      `INSERT INTO User (email,name,city)
         VALUES (?, ?, ?)`,
      [email, name, city],
   );
};

const getUserById = async (userId) => {
   let [results, fields] = await connection.query('SELECT * FROM User WHERE id = ?', [userId]);
   return results;
};

const updateForUser = async (email, name, city, userId) => {
   await connection.query('UPDATE User SET email = ? , name = ? , city = ? WHERE id = ?', [email, name, city, userId]);
};

module.exports = { getAllUsers, createNewUser, getUserById, updateForUser };
