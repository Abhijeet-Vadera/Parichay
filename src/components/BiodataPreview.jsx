import React from 'react';
import TraditionalTemplate from './templates/TraditionalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import FloralTemplate from './templates/FloralTemplate';
import RoyalTemplate from './templates/RoyalTemplate';
import New from './templates/NewTemplate';

export default function BiodataPreview({ data, photo, template = 'traditional' }) {
  const templates = {
    traditional: TraditionalTemplate,
    modern: ModernTemplate,
    floral: FloralTemplate,
    royal: RoyalTemplate,
    new:New
  };

  const SelectedTemplate = templates[template] || templates.traditional;

  return (
    <div id="biodata-preview">
      <SelectedTemplate data={data} photo={photo} />
    </div>
  );
}