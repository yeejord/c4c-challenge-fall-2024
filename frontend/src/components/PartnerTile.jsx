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
      <div className="partner-info">
        Partner Name
        Partner Description
        Partner Logo Source
        Active?
        Submit Button
      </div>
    </div>
  )
}

export default PartnerTile;