import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "../App.css";

const ListaKomponens = ({ elemek }) => {
    return(
        <>
        {elemek.map((elem, index) => (
            <>
            <div key={index} className="col-lg-4 card"> 
                <h3>Név: {elem.name} Email: {elem.email}</h3>
                <br></br>
                <Link to={"/szingli/" + elem.id} className="btn btn-primary card-link"><i className="bi bi-eye"></i> Részletek</Link>
                <Link to={"/modositas/" + elem.id} className="btn btn-primary"><i className="bi bi-pencil-square"/> Módosítás</Link>
                <Link to={"/torles/" + elem.id} className="btn btn-primary"><i className="bi bi-trash"/> Törlés</Link>

            </div>
            </>
        )
    )}
    </>
    )
}


function List() {
    const [adatok, setAdatok] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try{
        setPending(true)
        const tartalom = await axios.get("https://itmp.sulla.hu/users")
        setAdatok(tartalom.data)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setPending(false)
        }
    }; fetchData();
    
    }, [])

    return(
        <>
        <nav>
            <NavLink to="/feltoltes">Új elem hozzáadása</NavLink>
        </nav>
            <div>
                <div className="row">
                    <ListaKomponens elemek={adatok}/>
                </div>
            </div>
        </>
    )
}

export default List;