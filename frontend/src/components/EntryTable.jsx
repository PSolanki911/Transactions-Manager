import { useEffect, useState } from "react";
import EditEntry from "./EditEntry";
import "./EntryTable.css";


const EntryTable = () => {
  const [entries, setEntries] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchEntries = async () => {
    const res = await fetch("http://localhost:5000/api/entries");
    const data = await res.json();
    setEntries(data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const deleteEntry = async (transactionId) => {
    await fetch(`http://localhost:5000/api/entries/${transactionId}`, {
      method: "DELETE",
    });
    fetchEntries();
  };

  return (
    <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {entries.map((entry) =>
          editId === entry.transactionId ? (
            <EditEntry
              key={entry._id}
              entry={entry}
              onCancel={() => setEditId(null)}
              onSave={() => {
                setEditId(null);
                fetchEntries();
              }}
            />
          ) : (
            <tr key={entry._id}>
              <td>{entry.transactionId}</td>
              <td>{new Date(entry.date).toLocaleDateString()}</td>
              <td>{entry.amount}</td>
              <td>{entry.category}</td>
              <td>
                <button onClick={() => setEditId(entry.transactionId)}>
                  Edit
                </button>
                <button onClick={() => deleteEntry(entry.transactionId)}>
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
    </div>
  );
};

export default EntryTable;
