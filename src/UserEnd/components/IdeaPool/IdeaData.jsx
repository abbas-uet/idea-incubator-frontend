import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import React from "react";


export default function IdeaData({values}) {
    const monthArr=['January','February','March','April','May','June','July','August','September','October','November','December'];
    const arr=values.dateSubmit.split('-');

    return (
        <tr className="inner-box">
            <th scope="row">
                <div className="event-date">
                    <span>{arr[2]}</span>
                    <p>{monthArr[parseInt(arr[1])]}</p>
                </div>
            </th>
            <td>
                <div className="event-img">
                    <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""/>

                    <h3>{values.name}</h3>
                </div>
            </td>
            <td>
                <div className="event-wrap">
                    <h3>{values.projectname}</h3>
                    <div className="meta">

                        <div className="time">
                            <span>{values.description}<reprehenderit className="">             </reprehenderit></span>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="r-no">
                    <span>{values.status}</span>
                </div>
            </td>
            <td>
                <Button variant="outlined" size={'small'} sx={{width:100}} LinkComponent={Link} to={"viewIdea/"+values.id}>Read More</Button>
            </td>
        </tr>
    )
}
