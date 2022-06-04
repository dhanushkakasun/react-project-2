import { useState } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "./UpdateComponent.css";

import HeaderComponent from "../../components/Header/HeaderComponent";

function UpdateComponent() {
    const [tname, setTName] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const updateSchedule = async () => {
        const docRef = await addDoc(collection(db, "schedules"), {
            train: tname,
            from: from,
            to: to,
            departure: departure,
            arrival: arrival
        }).then(() => {
            alert("schedule added");
            clearFields();

        }).catch(() => {
            alert("schedule adding failed");
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

            <HeaderComponent name="Update" />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="nb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Train Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Night Mail" value={tname} onChange={(e) => { setTName(e.target.value) }} />
                        </div>
                        <div className="nb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">From</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="colombo fort" value={from} onChange={(e) => { setFrom(e.target.value) }} />
                        </div>
                        <div className="nb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">To</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Galle" value={to} onChange={(e) => { setTo(e.target.value) }} />
                        </div>
                        <div className="nb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Departure</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="8.00" value={departure} onChange={(e) => { setDeparture(e.target.value) }} />
                        </div>
                        <div className="nb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Arrivel</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="11.00" value={arrival} onChange={(e) => { setArrival(e.target.value) }} />
                        </div>
                        <br />
                        <button onClick={updateSchedule} type="button" className="btn btn-primary">Update Schedule</button>
                    </div>
                    <div className="col">

                        <img className="hc-image1" src="https://www.timeforkids.com/wp-content/uploads/2020/02/feature-cover_-train-k1.jpg?w=1024" alt="" />
                    </div>
                </div>
            </div>


        </div>

    );
}
export default UpdateComponent;