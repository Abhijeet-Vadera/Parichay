import React from 'react';

export default function TraditionalTemplate({ data, photo }) {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border-4 border-double border-indigo-300 shadow-lg">
      {/* Header */}
      <div className="text-center mb-8 relative flex flex-col">
        <div className=" h-1 bg-gradient-to-r from-indigo-300 via-pink-300 to-indigo-300"></div>
        <h1 className="text-3xl font-serif text-indigo-800 my-2">Marriage Biodata</h1>
        <div className=" h-1 bg-gradient-to-r from-indigo-300 via-pink-300 to-indigo-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Photo and Basic Info */}
        <div className="flex gap-8">
          <div className="w-48 h-48 border-4 border-gold p-1 bg-white shadow-lg">
            {photo ? (
              <img src={photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                No Photo
              </div>
            )}
          </div>
          
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md border-2 border-indigo-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-indigo-800">Name:</p>
                <p>{data.personalInfo?.fullName || 'Not specified'}</p>
              </div>
              <div>
                <p className="font-semibold text-indigo-800">Date of Birth:</p>
                <p>{data.personalInfo?.dateOfBirth || 'Not specified'}</p>
              </div>
              <div>
                <p className="font-semibold text-indigo-800">Gender:</p>
                <p>{data.personalInfo?.gender || 'Not specified'}</p>
              </div>
              <div>
                <p className="font-semibold text-indigo-800">Religion:</p>
                <p>{data.personalInfo?.religion || 'Not specified'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-indigo-200">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Contact Details</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Email:</span> {data.contactInfo?.email}</p>
              <p><span className="font-semibold">Phone:</span> {data.contactInfo?.phone}</p>
              <p><span className="font-semibold">Address:</span> {data.contactInfo?.address}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-indigo-200">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Education & Career</h2>
            <div className="space-y-2">
              <p><span className="font-semibold">Qualification:</span> {data.education?.highestQualification}</p>
              <p><span className="font-semibold">Occupation:</span> {data.education?.occupation}</p>
              <p><span className="font-semibold">Income:</span> {data.education?.income}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-indigo-200">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">Family Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Father's Name:</p>
              <p>{data.familyInfo?.fatherName}</p>
            </div>
            <div>
              <p className="font-semibold">Mother's Name:</p>
              <p>{data.familyInfo?.motherName}</p>
            </div>
            <div className="col-span-2">
              <p className="font-semibold">Siblings:</p>
              <p>{data.familyInfo?.siblings}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">Created with Parichay</p>
      </div>
    </div>
  );
}