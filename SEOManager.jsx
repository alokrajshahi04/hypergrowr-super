import React from 'react';
import { useQuery, useAction, getUserSEOReports, createSEOReport } from 'wasp/client/operations';

const SEOManagerPage = () => {
  const { data: seoReports, isLoading, error } = useQuery(getUserSEOReports);
  const createSEOReportFn = useAction(createSEOReport);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateSEOReport = () => {
    createSEOReportFn(/* Add necessary parameters here */);
  };

  return (
    <div className='p-4'>
      <button
        onClick={handleCreateSEOReport}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Create SEO Report
      </button>
      <div>
        {seoReports.map((report) => (
          <div key={report.id} className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'>
            <div>{/* Display report details here */}</div>
            <div>{/* Display additional report info here */}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SEOManagerPage;