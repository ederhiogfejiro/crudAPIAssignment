const express = require("express");
const router = express.Router();

const {
     getSum,
     getNumbers,
     getSingleNumbers,
     deleteNumber,
     updateNumber,
} = require("../controllers/numbers");

router.post("/", getSum);
router.get("/", getNumbers);
router.get("/:id", getSingleNumbers);
router.delete("/:id", deleteNumber);
router.patch("/:id", updateNumber);

module.exports = router;
