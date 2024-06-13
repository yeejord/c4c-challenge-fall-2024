import React from 'react';

/*
  A block where you add information for a new partner whose
  PartnerTile will be displayed
*/

function AddPartnerData({}) {
  
  return (

    <div className="add-data">
        <label for="partner-name">
            Partner Name
        </label>
        <input 
            type="text" 
            id="partner-name" 
            name="partner-name">
        </input>

        <label for="partner-description">
            Partner Description
        </label>
        <input 
            type="text" 
            id="partner-description" 
            name="partner-description">
        </input>

        <label for="partner-logo-source">
            Partner Logo Source
        </label>
        <input 
            type="url" 
            id="partner-logo-source" 
            name="partner-logo-source">
        </input>

        <label for="is-active">
        Active?
        <input 
            type="checkbox" 
            id="is-active" 
            name="is-active">
        </input>
        </label>

        <button class="submit-button">
            Submit
        </button>
    </div>

  )
}


export default AddPartnerData;