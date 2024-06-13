import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {

  return (
    
    <div className="partner-tile">
      <img className="partner-thumbnail" src='' />
      <hr />
      <div className="partner-logo">
        Partner Logo
      </div>
      <div className="partner-name">
        Partner Name
      </div>
      <div className="active-source">
        Active Source?
      </div>
      <div className="partner-description">
        Partner Description
      </div>

      <button class="delete-button">
        Delete
      </button>
    </div>
  )
}

export default PartnerTile;