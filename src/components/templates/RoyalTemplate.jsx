import React from 'react';

export default function RoyalTemplate({ data, photo }) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-purple-50 p-8 rounded-lg shadow-xl border-8 border-double border-amber-300">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-300 via-purple-300 to-amber-300"></div>
        <h1 className="text-4xl font-serif text-purple-900 my-4">Marriage Biodata</h1>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-300 via-purple-300 to-amber-300"></div>
      </div>

      {/* Photo and Basic Info */}
      <div className="flex gap-8 items-start">
        <div className="w-48 h-48 border-8 border-amber-200 shadow-lg p-1 bg-white">
          {photo ? (
            <img src={photo} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-amber-50 flex items-center justify-center text-amber-300">
              No Photo
            </div>
          )}
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg border-2 border-amber-200 shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <InfoField label="Name" value={data.personalInfo?.fullName} />
            <InfoField label="Date of Birth" value={data.personalInfo?.dateOfBirth} />
            <InfoField label="Gender" value={data.personalInfo?.gender} />
            <InfoField label="Religion" value={data.personalInfo?.religion} />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <Section title="Contact Details">
          <InfoField label="Email" value={data.contactInfo?.email} />
          <InfoField label="Phone" value={data.contactInfo?.phone} />
          <InfoField label="Address" value={data.contactInfo?.address} />
        </Section>

        <Section title="Education & Career">
          <InfoField label="Qualification" value={data.education?.highestQualification} />
          <InfoField label="Institution" value={data.education?.institution} />
          <InfoField label="Occupation" value={data.education?.occupation} />
          <InfoField label="Income" value={data.education?.income} />
        </Section>
      </div>

      <Section title="Family Information" className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <InfoField label="Father's Name" value={data.familyInfo?.fatherName} />
          <InfoField label="Mother's Name" value={data.familyInfo?.motherName} />
          <div className="col-span-2">
            <InfoField label="Siblings" value={data.familyInfo?.siblings} />
          </div>
        </div>
      </Section>

      <div className="text-center text-sm text-amber-700 mt-8">
        Created with Parichay
      </div>
    </div>
  );
}

const Section = ({ title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-lg border-2 border-amber-200 shadow-md ${className}`}>
    <h2 className="text-2xl font-serif text-purple-900 mb-4">{title}</h2>
    <div className="space-y-2">{children}</div>
  </div>
);

const InfoField = ({ label, value }) => (
  <div>
    <span className="font-medium text-amber-800">{label}:</span>{' '}
    <span className="text-gray-800">{value || 'Not specified'}</span>
  </div>
);