import CardsList from "../../components/Main/CardsList/CardsList";
import CreateList from "../../components/Main/CreateList/CreateList";

import "../../components/Main/Main.css";

const Home = () => {
  return (
    <div className="page-container">
      <CreateList />
      <CardsList />
    </div>
  );
};

export default Home;
