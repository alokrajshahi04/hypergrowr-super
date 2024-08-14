import React, { useState } from 'react';
import { useQuery, useAction, getUserWebsites, createWebsite } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';

const WebsiteBuilderPage = () => {
  const { data: websites, isLoading, error } = useQuery(getUserWebsites);
  const createWebsiteFn = useAction(createWebsite);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggingItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    // Implement logic for dropping the item and updating the website
    setDraggingItem(null);
  };

  const handleCreateWebsite = () => {
    createWebsiteFn(/* pass any required data */);
  };

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center h-96 border-dashed border-2 border-gray-400' onDragOver={handleDragOver} onDrop={handleDrop}>
        {draggingItem ? (
          <div>{/* Render the dragging item */}</div>
        ) : (
          <div>Add components here</div>
        )}
      </div>
      <button onClick={handleCreateWebsite} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Create Website</button>
    </div>
  );
}

export default WebsiteBuilderPage;