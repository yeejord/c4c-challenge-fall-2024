import React from 'react';

/*
  A block where you add information for a new partner whose
  PartnerTile will be displayed
*/

function AddPartnerData({}) {
  
    const [partnerName, setPartnerName]=useState ("");
    const [partnerDescription, setPartnerDescription]=useState ("");
    const [partnerLogoSource, setLogoSource]=useState ("");
    const handleSubmit=() =>{};

  return (

    <form className="add-data"onSubmit={handleSubmit}>
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
            name="is-active">
        </input>
        </label>

        <button class="submit-button" onClick={() =>handleSubmit()}>
            Submit
        </button>
    </form>

  )
}


export default AddPartnerData;