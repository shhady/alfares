import React, { Suspense } from 'react';
import ClientComponent from './ClientComponent';

const ParentComponent = ({ data }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent data={data} />
    </Suspense>
  );
};

export default ParentComponent;
