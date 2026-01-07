const Entry = require("../models/Entry");

exports.createEntry = async (req,res) => {
    try{
    const entry = new Entry(req.body);
    const savedEntry = await entry.save();
    res.status(201).json(savedEntry);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

exports.getAllEntries =  async (req,res) => {
    try{
    const entries = await Entry.find();
    res.json(entries);
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateEntry = async (req,res) => {
    try{
    const { transactionId } = req.params;
    const updatedEntry = await Entry.findOneAndUpdate(
        { transactionId: transactionId.trim() },
        req.body,
        { new: true }
    );
    if(!updatedEntry){
        return res.status(404).json({ message: "Transactions is not found" })
    }
    res.json(updatedEntry);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteEntry =  async (req, res) => {
    try{
  const { transactionId } = req.params;

  const deletedEntry = await Entry.findOneAndDelete({
    transactionId: transactionId.trim()
  });

  if (!deletedEntry) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  res.json({ message: "Entry Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
