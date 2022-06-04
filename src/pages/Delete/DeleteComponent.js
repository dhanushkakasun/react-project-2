import { useState } from "react";
import NavBar from "../../components/Navigation/NavBar";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { db } from "../../firebase-config";
import { deleteDoc,doc, where } from "firebase/firestore";
import './DeleteComponent.css';
function DeleteComponent(){
    const [tnumber, setTnumber] = useState("");
    const [tname, setTName] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");

    const deleteSchedule = async () => {
        await deleteDoc(doc(db, "schedules",where("tnumber","=","number")))
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
            <NavBar />
            <HeaderComponent name="Delete"/>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="nb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Train Number</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="6011" value={tnumber} onChange={(e) => { setTnumber(e.target.value) }} />
                        </div>
                       
                        <br />
                        <button onClick={deleteSchedule} type="button" className="btn btn-primary">Delete Schedule</button>
                    </div>
                    <div  className="col">
                    
                        <img className="hc-image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg/1200px-%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>

    );

}
export default DeleteComponent;