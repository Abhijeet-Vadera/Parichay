import React from 'react';

export default function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  const templates = [
    { id: 'traditional', name: 'Traditional', description: 'Classic design with elegant borders and decorative elements' },
    { id: 'modern', name: 'Modern', description: 'Contemporary layout with clean lines and gradient accents' },
    { id: 'new', name: 'New', description: 'Contemporary layout with clean lines and gradient accents' }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Choose Template Style</h2>
      <div className="grid grid-cols-3 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateChange(template.id)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedTemplate === template.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
          >
            <h3 className="font-semibold text-gray-800">{template.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}