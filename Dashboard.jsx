import React from 'react';
import { useQuery, getUserWebsites, getUserMarketingCampaigns, getUserSEOReports, getUserAnalyticsReports } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';

const DashboardPage = () => {
  const { data: websites, isLoading: websitesLoading, error: websitesError } = useQuery(getUserWebsites);
  const { data: campaigns, isLoading: campaignsLoading, error: campaignsError } = useQuery(getUserMarketingCampaigns);
  const { data: seoReports, isLoading: seoLoading, error: seoError } = useQuery(getUserSEOReports);
  const { data: analyticsReports, isLoading: analyticsLoading, error: analyticsError } = useQuery(getUserAnalyticsReports);

  if (websitesLoading || campaignsLoading || seoLoading || analyticsLoading) return 'Loading...';
  if (websitesError || campaignsError || seoError || analyticsError) return 'Error: ' + (websitesError || campaignsError || seoError || analyticsError);

  return (
    <div className='p-4'>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Websites</h2>
          {websites.map((website) => (
            <div key={website.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
              <div>{website.name}</div>
              <Link to={`/website/${website.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'>Details</Link>
            </div>
          ))}
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Marketing Campaigns</h2>
          {campaigns.map((campaign) => (
            <div key={campaign.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
              <div>{campaign.name}</div>
              <Link to={`/campaign/${campaign.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'>Details</Link>
            </div>
          ))}
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>SEO Reports</h2>
          {seoReports.map((report) => (
            <div key={report.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
              <div>{report.title}</div>
              <Link to={`/seo/${report.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'>Details</Link>
            </div>
          ))}
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-2'>Analytics Reports</h2>
          {analyticsReports.map((report) => (
            <div key={report.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
              <div>{report.title}</div>
              <Link to={`/analytics/${report.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'>Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;