import AddEntry from "../components/AddEntry";
import EntryTable from "../components/EntryTable";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Transactions Manager</h2>
      <div className="card">
        <AddEntry />
      </div>
      <div className="divider"></div>
      <div className="card">
        <EntryTable />
      </div>
      
    </div>
  );
};

export default Home;
