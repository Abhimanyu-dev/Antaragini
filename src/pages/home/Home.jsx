
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Datatable from "../../components/datatable/Datatable";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Home;
