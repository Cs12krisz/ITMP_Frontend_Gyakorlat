import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Del() {
    const [adat, setAdat] = useState("");
    const params = useParams();
    const id = params.id;

        useEffect(() => {
            axios
            .delete(`https://itmp.sulla.hu/users/${id}`)
            .then((tartalom) => {
                setAdat(tartalom.data.message)    
            })
            .catch((error) => {
                console.log(error)
            })
        })

        return(
        <>
            <h1>{adat}</h1>
            <Link to="/lista"><i className="bi bi-backspace"></i> Vissza</Link>
        </>
    )
}

export default Del;