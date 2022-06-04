import { useState } from "react";

import HeaderComponent from "../../components/Header/HeaderComponent";
import { db } from "../../firebase-config";
import { deleteDoc,doc } from "firebase/firestore";
import './DeleteComponent.css';
function DeleteComponent(){
    const [tnumber, setTnumber] = useState("");
    const [tname, setTName] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");

    const deleteSchedule = async () => {
        await deleteDoc(doc(db, "schedules", ))
        
        .then(() => {
            alert("schedule deleted");
            clearFields();
            
            
        }).catch(() => {
            alert("schedule deleting failed");
        });
    };
   

    const clearFields = () => {
        setTName("");
        setFrom("");
        setTo("");
        setDeparture("");
        setArrival("");
    };

    return (
        <div>
            
            <HeaderComponent name="Delete"/>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="nb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Train Number</label>
                            <input type="email" className="form-control"  id="exampleFormControlInput1" placeholder="6011" value={tnumber} onChange={(e) => { setTnumber(e.target.value) }} />
                        </div>
                       
                        <br />
                        <button onClick={deleteSchedule} type="button" className="btn btn-primary">Delete Schedule</button>
                    </div>
                    <div  className="col">
                    
                        <img className="hc-image1" src="https://i.unu.edu/media/ourworld.unu.edu-en/article/20418/european-trains-go-down-renewable-route-3.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>

    );

}
export default DeleteComponent;