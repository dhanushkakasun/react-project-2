import { useEffect, useState } from "react";

import './ViewComponent.css';
import HeaderComponent from "../../components/Header/HeaderComponent";
import { db } from "../../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

function ViewComponent() {


    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        
        getSchedules();
    }, [schedules]);

    const getSchedules = async () => {
        const querySnapshot = await getDocs(collection(db, "schedules"));
        setSchedules(querySnapshot.docs.map((doc) => ({
            ...doc.data()
        })));

    };

    return (
        <div>

            <HeaderComponent name="View" />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Train Number</th>
                                    <th scope="col">Train Name</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Departure</th>
                                    <th scope="col">Arrival</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    schedules.map(schedule => {
                                        return (
                                            <tr>
                                                <td>{schedule.number}</td>
                                                <td>{schedule.train}</td>
                                                <td>{schedule.from}</td>
                                                <td>{schedule.to}</td>
                                                <td>{schedule.departure}</td>
                                                <td>{schedule.arrival}</td>
                                            </tr>

                                        )
                                    })
                                }


                            </tbody>
                        </table>


                    </div>
                    <div className="col">

                        <img className="hc-image1" src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jjk6cnsbmu8yvbce_1591791559.jpeg" alt="" />
                    </div>
                </div>
            </div>


        </div>

    );

}
export default ViewComponent;