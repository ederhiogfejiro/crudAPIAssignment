const { v4: uuid } = require("uuid");
// const { appendFile } = require("fs");

let users = [];

const getSum = async (req, res) => {
     const numbers = req.body;
     users.push({ ...numbers, id: uuid() });
     function addSum() {
          return parseFloat(numbers.num1) + parseFloat(numbers.num2);
     }

     res.status(201).json({ numbers: numbers, Result: addSum() });
};

const getNumbers = async (req, res) => {
     res.send(users);
};

const getSingleNumbers = (req, res) => {
     const { id } = req.params;

     const findNumber = users.find((num) => num.id === id);

     res.send(findNumber);
};

const deleteNumber = (req, res) => {
     const { id } = req.params;

     users = users.filter((num) => num.id !== id);
     res.send(`Number with id ${id} deleted from the data base`);
};

const updateNumber = (req, res) => {
     const { id } = req.params;

     const { num1, num2 } = req.body;

     const user = users.find((num) => num.id === id);

     if (num1) user.num1 = num1;
     if (num2) user.num2 = num2;

     res.send(`Number with the ${id} has been updated`);
};

module.exports = {
     getSum,
     getNumbers,
     getSingleNumbers,
     deleteNumber,
     updateNumber,
};
