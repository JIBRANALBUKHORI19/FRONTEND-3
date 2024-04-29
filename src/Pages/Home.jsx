import Header from "../Componen/Header";
import Sidebar from "../Componen/Sidebar";
import Utama from "../Componen/Utama";
import Layout from "../Componen/Layout";
import Navbar from "../Componen/Navbar";

function Home() {
    return ( 
        <>
        <Layout>
                <Header/>
            <Utama/>
        </Layout>
        </>
     );
}

export default Home;