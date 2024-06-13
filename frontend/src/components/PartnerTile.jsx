import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {

  return (
    
    <div className="partner-tile">
      <img className="partner-thumbnail" 
        src={partnerData.thumbnailUrl} 
        alt="new"/>
      <hr />
      <div className="partner-name">
        <h1> {partnerData.name} </h1>
      </div>
      <div className="active-source">
        <h1>{partnerData.active} </h1>
      </div>
      <div className="partner-description">
        <h1>{partnerData.description}</h1>
      </div>

      <button class="delete-button">
        Delete
      </button>
    </div>
  )
}

export default PartnerTile;