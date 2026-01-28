import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const ListaKomponens = ({ elemek }) => {
    return(
        <>
        {elemek.map((elem, index) => (
            <>
            <div key={index} className="col-lg-4"> 
                <h3>Név: {elem.name} Email: {elem.email}</h3>
                <br></br>
                <Link to={"/szingli/" + elem.id} className="btn btn-primary"><i className="bi bi-eye"></i> Részletek</Link>
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
    const [isPending, setPending] = useState(true);

    useEffect(() => {
        axios
        .get("https://itmp.sulla.hu/users")
        .then((tartalom) => {
            setAdatok(tartalom.data)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setPending(false)
        })
    }, [])

    return(
        <>
            <div>
                <div className="row">
                    <ListaKomponens elemek={adatok}/>
                </div>
            </div>
        </>
    )
}

export default List;