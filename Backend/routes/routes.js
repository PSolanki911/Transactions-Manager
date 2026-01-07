const express = require("express");
const router = express.Router();

const entryController = require("../controllers/entry.controller");

router.post("/", entryController.createEntry); 

router.get("/" , entryController.getAllEntries);

router.put("/:transactionId", entryController.updateEntry);

router.delete("/:transactionId", entryController.deleteEntry);

module.exports = router;