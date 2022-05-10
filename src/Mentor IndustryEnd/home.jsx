import React from 'react';
import {Calender} from "./Calender/Calender";

function Home({role}) {
    return (
        <div>

        {
            role==='mentor'?
        <div><Calender/></div>:
            <div>Industry Home Here</div>
        }
        </div>
    );
}

export default Home;