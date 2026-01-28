import axios from "axios";
import { useParams } from "react-router-dom";


function Mod() {
    const params = useParams();
    const id = params.id;
    return(
        <>
            <h1>Módosítani az elemen</h1>
            <form method="post" onSubmit={(event) => {
                event.preventDefault()
                event.persist();
                const name = event.target.nev.value;
                const email = event.target.email.value;

                axios
                .put(`https://itmp.sulla.hu/users/${id}`, {
                    "id" : id,
                    "name" : name,
                    "email" : email
                })
                .then((tartalom) => {
                    console.log(tartalom.data)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    console.log("Kérés elvégezve")
                })
            }}  
            >
            <label htmlFor="nev">Név</label>
            <input type="text" name="nev"  /><br/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"  /><br/>
            <input type="submit" />
            </form>
        </>
    )
}

export default Mod;