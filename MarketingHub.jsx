import React from 'react';
import { useQuery, useAction, getUserMarketingCampaigns, createMarketingCampaign } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';

const MarketingHubPage = () => {
  const { data: campaigns, isLoading, error } = useQuery(getUserMarketingCampaigns);
  const createCampaignFn = useAction(createMarketingCampaign);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {campaigns.map((campaign) => (
        <div key={campaign.id} className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'>
          <div>{campaign.name}</div>
          <div>{campaign.status}</div>
          <div>
            <button onClick={() => createCampaignFn({ name: 'New Campaign' })} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Campaign</button>
            <Link to={`/campaign/${campaign.id}`} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketingHubPage;