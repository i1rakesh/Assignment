import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// key={index}>{item.name}
const Home = () =>{
   return(
    <div>
    <Navbar/>
    <div className="empty">
    <h1>Home Page</h1>
    </div>
    <Footer/>
    </div>
   )
}
export default Home