import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ElemKomponens = ({elem}) => {
    return(
        <>
            <div>
                <h1>{elem.name}</h1>
                <h1>{elem.email}</h1>
                <Link to="/lista" className="btn btn-warning"><i className="bi bi-backspace"></i> Vissza</Link>
            </div>
        </>
    )
}

function Single() {
    const [adat, setAdat] = useState([])
    const params = useParams();
    const id = params.id;

useEffect(() => {
    const fetchData = async () => {
        try {
            const tartalom = await axios.get(`https://itmp.sulla.hu/users/${id}`);
            setAdat(tartalom.data);
        } catch (error) {
            console.log(error)
        }
    }; fetchData();
}, [id]);

    return(
        <>
            <h1>Elem részletei</h1>
            <div className="container">
                <div className="row m-5 p-5 border">
                    <ElemKomponens elem={adat}/>
                </div>
            </div>
        </>
    )
}

export default Single;