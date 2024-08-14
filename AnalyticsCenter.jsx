import React from 'react';
import { Link, useQuery, useAction, getUserAnalyticsReports, createAnalyticsReport } from 'wasp/client/operations';

const AnalyticsCenterPage = () => {
  const { data: analyticsReports, isLoading, error } = useQuery(getUserAnalyticsReports);
  const createAnalyticsReportFn = useAction(createAnalyticsReport);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateAnalyticsReport = () => {
    createAnalyticsReportFn({ /* Add necessary parameters here */ });
  };

  return (
    <div className='p-4'>
      {analyticsReports.map((report) => (
        <div key={report.id} className='bg-white p-4 mb-4 rounded-lg'>
          <h2>{report.title}</h2>
          <p>{report.data}</p>
        </div>
      ))}
      <button
        onClick={handleCreateAnalyticsReport}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Analytics Report
      </button>
    </div>
  );
}

export default AnalyticsCenterPage;