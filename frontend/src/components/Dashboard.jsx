import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import AddPartnerData from './AddData';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {

  const [partners, setPartners] = useState({});

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
  }, [])

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        <AddPartnerData />
        <PartnerTile partnerData={{}} />
      </div>
    </div>
  )
}

export default Dashboard;