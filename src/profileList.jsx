import React, { useEffect } from "react";
import { useState } from "react";
import data from './data.json'
import Profile from "./profile";


function ProfileList()
{
    const [pList, setpList] = useState([])
   useEffect(()=>{
    setpList(data);
   },[]);
    return(
        <div>
         {
            pList.map((profile, index) =>
            (
              <Profile
              name = {profile.name}
              dob = {profile.dob}
              nationality = {profile.nationality}
              religion = {profile.religion}
              sex = {profile.sex}
              category = {profile.category}
              />  
            ))
         }
        </div>
    );
}
export default ProfileList;