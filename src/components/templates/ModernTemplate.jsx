import React from 'react';

export default function ModernTemplate({ data, photo }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      {/* Header with Photo */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg h-40"></div>
        <div className="relative pt-6 px-8 flex items-end pb-4">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
            {photo ? (
              <img src={photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                No Photo
              </div>
            )}
          </div>
          <div className="ml-6 pb-4">
            <h1 className="text-3xl font-bold text-white">{data.personalInfo?.fullName || 'Your Name'}</h1>
            <p className="text-blue-100">{data.education?.occupation || 'Occupation'}</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
              Personal Details
            </h2>
            <div className="space-y-2">
              <p><span className="font-medium text-gray-600">Date of Birth:</span> {data.personalInfo?.dateOfBirth}</p>
              <p><span className="font-medium text-gray-600">Gender:</span> {data.personalInfo?.gender}</p>
              <p><span className="font-medium text-gray-600">Religion:</span> {data.personalInfo?.religion}</p>
              <p><span className="font-medium text-gray-600">Marital Status:</span> {data.personalInfo?.maritalStatus}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
              Contact Information
            </h2>
            <div className="space-y-2">
              <p><span className="font-medium text-gray-600">Email:</span> {data.contactInfo?.email}</p>
              <p><span className="font-medium text-gray-600">Phone:</span> {data.contactInfo?.phone}</p>
              <p><span className="font-medium text-gray-600">Address:</span> {data.contactInfo?.address}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
              Education & Career
            </h2>
            <div className="space-y-2">
              <p><span className="font-medium text-gray-600">Qualification:</span> {data.education?.highestQualification}</p>
              <p><span className="font-medium text-gray-600">Institution:</span> {data.education?.institution}</p>
              <p><span className="font-medium text-gray-600">Occupation:</span> {data.education?.occupation}</p>
              <p><span className="font-medium text-gray-600">Annual Income:</span> {data.education?.income}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
              Family Background
            </h2>
            <div className="space-y-2">
              <p><span className="font-medium text-gray-600">Father's Name:</span> {data.familyInfo?.fatherName}</p>
              <p><span className="font-medium text-gray-600">Mother's Name:</span> {data.familyInfo?.motherName}</p>
              <p><span className="font-medium text-gray-600">Siblings:</span> {data.familyInfo?.siblings}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-8 pt-4 border-t">
        Created with Parichay
      </div>
    </div>
  );
}