const { v4: uuid } = require("uuid");
const { appendFile, readFile } = require("fs");

let users = [];

const createUser = async (req, res) => {
     const user = req.body;
     users.push({ ...user, id: uuid() });
     function addSum() {
          return parseFloat(user.num1) + parseFloat(user.num2);
     }

     // // await appendFile("history.json", `${result}`, (err) =>
     // //      console.log(err)
     // // );

     res.status(201).json({ sum: addSum(), numbers: user });
};

const getUsers = async (req, res) => {
     // console.log(users);

     // const result = JSON.stringify(users);
     await appendFile("history.json", `${JSON.stringify(users)}`, (err) =>
          console.log(err)
     );

     res.send(users);
};

const getSingleUser = async (req, res) => {
     const { id } = req.params;
     const history = await readFile("./history.json", "utf-8", (err) =>
          console.log(err)
     );

     const findNum = history.find((user) => user.id === id);

     res.send(findNum);
};

const deleteUser = (req, res) => {
     const { id } = req.params;

     users = users.filter((user) => user.id !== id);
     res.send(`user with id ${id} deleted from the data base`);
};

const updateUser = (req, res) => {
     const { id } = req.params;

     const { firstName, lastName, age } = req.body;

     const user = users.find((user) => user.id === id);

     if (firstName) user.firstName = firstName;
     if (lastName) user.lastName = lastName;
     if (age) user.age = age;

     res.send(`user with the ${id} has been updated`);
};

module.exports = {
     createUser,
     getUsers,
     getSingleUser,
     deleteUser,
     updateUser,
};
