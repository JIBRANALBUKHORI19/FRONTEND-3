import Props from "../Componen/Props";
import Daftar from "../Componen/Daftar";
import Button from "../Componen/Button";
import Navbar from "../Componen/Navbar";
import Layout from "../Componen/Layout";

const IndukProps = () => {
    const name = "jibran";
    const number = 10;

    const DaftarBuku = ["BUKU IPA",
                        "BUKU IPS", 
                        "BUKU PENJAS"]
    const DaftarBuku2 = ["BUKU NOVEL",
                        "BUKU CERITA", 
                        "BUKU MTK"]
    
    const DaftarSiswa = {"name" : "JIBRAN",
                        "number" : 10,
                        "siswa" : true}
    const DaftarSiswa2 = {"name" : "UMAM",
                        "number" : 10,
                        "siswa" : false}
    const DaftarSiswa3 = {"name" : "MAKHRUF",
                        "number" : 10,
                        "siswa" : true}
    function handleClik(){
        alert ('data anda telah berhasil disimpan !!!')
    }
    return ( 
        <> 
        <Layout>
            <h1 className="text-3xl font-bold underline text-orange-500">Hello world!</h1>
        <div className="mx-8">
        <Daftar DaftarBuku={DaftarBuku} DaftarBuku2={DaftarBuku2}/>
        <p>ini menggunakan children</p>
        </div>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa}/>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa2}/>
        <hr/>
        <Props DaftarSiswa={DaftarSiswa3}/>
        </Layout>
            {/*<Props 
            name={name}
            number={number}
            siswa={true}/>
            <hr/>
            <Props 
            name="JIBRAN"
            number={10}
    siswa={true}/>*/}
        </>
    );
}
 
export default IndukProps;