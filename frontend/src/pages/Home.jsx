import AddEntry from "../components/AddEntry";
import EntryTable from "../components/EntryTable";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Transactions Manager</h2>
      <AddEntry />
      <hr />
      <EntryTable />
    </div>
  );
};

export default Home;
