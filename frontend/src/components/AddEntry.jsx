import { useState } from "react";
import "./AddEntry.css";

const AddEntry = () => {
  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      transactionId,
      amount,
      category,
    };

    if (date) {
      payload.date = date;
    }

    await fetch("http://localhost:5000/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    window.location.reload();
  };

  return (
    <form className="add-entry-form" onSubmit={handleSubmit}>
      <h3 className="add-entry-title">Add Entry</h3>

      <input
        placeholder="Transaction ID"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddEntry;
