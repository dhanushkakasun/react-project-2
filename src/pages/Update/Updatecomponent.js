import { useState } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import NavBar from "../../components/Navigation/NavBar";
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
            <NavBar/>
            <HeaderComponent name="Update"/>
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

                        <img className="hc-image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg/1200px-%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>

    );
}
export default UpdateComponent;