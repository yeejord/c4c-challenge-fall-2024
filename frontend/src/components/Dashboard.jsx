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
      <div id="add-partners-bpox">
        <AddPartnerData />
      </div>
      <div id="main-partners-grid">
        <PartnerTile partnerData={{  
    thumbnailUrl: "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
    name: "Speak For The Trees",
    description: "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
    active: "true",
  }} />
      </div>
      
    </div>
  )
}

export default Dashboard;