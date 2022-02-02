import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar"
/* import "./homepage.css"; */

  const Home =()=> {
  
  
  return (
    <>
    <Topbar />
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;