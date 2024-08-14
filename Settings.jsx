import React from 'react';
import { Link } from 'wasp/client/router';
import { useQuery } from 'wasp/client/operations';
import { getUserSettings } from '@src/queries.js';

const SettingsPage = () => {
  const { data: settings, isLoading, error } = useQuery(getUserSettings);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>User Settings</h1>
      <p className='mb-4'>Manage your profile, integration settings, and subscription here.</p>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Profile Information</h2>
        <p>Name: {settings.name}</p>
        <p>Email: {settings.email}</p>
        <p>Subscription Plan: {settings.subscriptionPlan}</p>
      </div>
      <div>
        <h2 className='text-lg font-semibold mt-4 mb-2'>Integration Settings</h2>
        <p>Social Media Integration: {settings.socialMediaIntegration ? 'Enabled' : 'Disabled'}</p>
        <p>Email Platform Integration: {settings.emailIntegration ? 'Enabled' : 'Disabled'}</p>
      </div>
      <div>
        <h2 className='text-lg font-semibold mt-4 mb-2'>Subscription Management</h2>
        <p>Renewal Date: {settings.renewalDate}</p>
        <p>Auto-Renewal: {settings.autoRenewal ? 'Enabled' : 'Disabled'}</p>
      </div>
    </div>
  );
}

export default SettingsPage;