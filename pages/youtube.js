import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar"
/* import "./homepage.css"; */

  const Youtube =()=> {
  
  
  return (
    <>
    <Topbar />
     
      <div className="home">
        <Posts />
        {/* <Sidebar /> */}
        <Footer />
      </div>
    </>
  );
}

export default Youtube;