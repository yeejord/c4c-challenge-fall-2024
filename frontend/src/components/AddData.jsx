import React from 'react';
import { useState, useEffect } from 'react';

/*
  A block where you add information for a new partner whose
  PartnerTile will be displayed
*/

function AddPartnerData({}) {
  
    const [partnerName, setPartnerName]=useState("");
    const [partnerDescription, setPartnerDescription]=useState("");
    const [partnerLogoSource, setPartnerLogoSource]=useState("");
    const [activity, setActivity]=useState("Not Active");
    const handleSubmit=async() =>{const response=await 
        fetch(`http://localhost:4000`, 
            {method: `POST`, body:JSON.stringify({
                thumbnailUrl:partnerLogoSource,
                name:partnerName,
                description:partnerDescription,
                active:activity,
            }),
        })
        console.log(response.status);
    };

  return (

    <form className="add-data"onSubmit={handleSubmit}
    name="add-data">
        <label for="partner-name">
            Partner Name
        </label>
        <input 
            type="text" 
            id="partner-name" 
            name="partner-name"
            required
            value={partnerName}
            onChange={() => setPartnerName(event.target.value)}>
        </input>

        <label for="partner-description">
            Partner Description
        </label>
        <input 
            type="text" 
            id="partner-description" 
            name="partner-description"
            required
            value={partnerDescription}
            onChange={() => setPartnerDescription(event.target.value)}>
        </input>

        <label for="partner-logo-source">
            Partner Logo Source
        </label>
        <input 
            type="url" 
            id="partner-logo-source" 
            name="partner-logo-source"
            required
            value={partnerLogoSource}
            onChange={() => setPartnerLogoSource(event.target.value)}>
        </input>

        <label for="is-active">
        Active?
        <input 
            type="checkbox" 
            id="is-active" 
            name="is-active"
            checked={activity=="Active"}
            value={activity}
            onChange={() => {if(value=="Not Active") {setActivity("Active")} else {setActivity("Not Active")}}}>
        </input>
        </label>

        <button className="submit-button" onClick={() =>handleSubmit()}>
            Submit
        </button>
    </form>

  )
}


export default AddPartnerData;