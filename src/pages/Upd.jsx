import axios from "axios";
import { useState } from "react";

function Upd() {
    const [adat, setAdat] = useState(null)
        return(
        <>
            <h1>Feltölteni egy elemet</h1>
            <form method="post" onSubmit={(event) => {
                event.preventDefault();
                event.persist();
                const name = event.target.name.value;
                const email = event.target.email.value;
                
                const fetchData = async () => {
                    try {
                        const tartalom = await axios.post("https://itmp.sulla.hu/users", {
                            "name" : name,
                            "email": email
                        })
                        setAdat(tartalom.data)
                    } catch (error) {
                        console.log(error)
                    }
                }; fetchData();
                

            }}>
                <label>Név</label>
                <input type="text" name="name" /><br/>
                <label>Email</label>
                <input type="text" name="email" /><br/>
                <input type="submit" />
            </form>
        </>
    )
}

export default Upd;