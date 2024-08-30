import React from "react";


function Profile({name, dob, nationality, religion, sex, category})
{
    return(
        <div>
        <p className="font-semibold">Name: <span className="font-normal">{name}</span></p>
        <p className="font-semibold">D.O.B: <span className="font-normal">{dob}</span></p>
        <p className="font-semibold">Nationality: <span className="font-normal">{nationality}</span></p>
        <p className="font-semibold">Religion: <span className="font-normal">{religion}</span></p>
        <p className="font-semibold">Sex: <span className="font-normal">{sex}</span></p>
        <p className="font-semibold">Category: <span className="font-normal">{category}</span></p>
        </div>
    );
}

export default Profile;