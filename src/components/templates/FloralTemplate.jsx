import React from 'react';

export default function FloralTemplate({ data, photo }) {
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-xl">
      {/* Decorative floral corners */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/templates/floral-corner.png')] bg-contain bg-no-repeat opacity-30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/templates/floral-corner.png')] bg-contain bg-no-repeat transform rotate-90 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[url('/templates/floral-corner.png')] bg-contain bg-no-repeat transform -rotate-90 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[url('/templates/floral-corner.png')] bg-contain bg-no-repeat transform rotate-180 opacity-30"></div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-rose-800">Marriage Biodata</h1>
        <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200"></div>
      </div>

      {/* Photo and Basic Info */}
      <div className="flex gap-8 items-start">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-200 p-1">
          {photo ? (
            <img src={photo} alt="Profile" className="w-full h-full object-cover rounded-full" />
          ) : (
            <div className="w-full h-full bg-rose-50 flex items-center justify-center text-rose-300 rounded-full">
              No Photo
            </div>
          )}
        </div>

        <div className="flex-1 bg-rose-50 p-6 rounded-lg">
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

      <div className="text-center text-sm text-rose-400 mt-8">
        Created with Parichay
      </div>
    </div>
  );
}

const Section = ({ title, children, className = '' }) => (
  <div className={`bg-rose-50 p-6 rounded-lg ${className}`}>
    <h2 className="text-xl font-serif text-rose-800 mb-4">{title}</h2>
    <div className="space-y-2">{children}</div>
  </div>
);

const InfoField = ({ label, value }) => (
  <div>
    <span className="font-medium text-rose-700">{label}:</span>{' '}
    <span className="text-gray-800">{value || 'Not specified'}</span>
  </div>
);