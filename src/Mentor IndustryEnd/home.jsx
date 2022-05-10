import React from 'react';

function Home({role}) {
    return (
        <div>

        {
            role==='mentor'?
        <div>Mentor Home Here</div>:
            <div>Industry Home Here</div>
        }
        </div>
    );
}

export default Home;