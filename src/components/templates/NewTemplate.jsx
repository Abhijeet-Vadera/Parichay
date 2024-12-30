import React from "react";

export default function NewTemplate({ data, photo }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 mt-8">
      {/* Header Section */}
      <div className="p-6 bg-orange-100 text-center">
        <h1 className="text-2xl font-bold text-orange-700">ॐ श्री गणेशाय नमः</h1>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {data?.personalInfo?.fullName || "Your Name"}
        </h2>
        <p className="text-gray-600">
          Date of Birth:{" "}
          <span className="font-medium">
            {data?.personalInfo?.dateOfBirth || "N/A"}
          </span>
        </p>
        <p className="text-gray-600">
          Place of Birth:{" "}
          <span className="font-medium">
            {data?.personalInfo?.placeOfBirth || "N/A"}
          </span>
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-12 gap-4 p-6">
        {/* Image Section */}
        <div className="col-span-12 md:col-span-4">
          <div className="w-48 h-48 mx-auto rounded-xl border border-gray-300 overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                No Photo
              </div>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="col-span-12 md:col-span-8">
          <h3 className="text-lg font-semibold text-orange-700 mb-4">
            Personal Details
          </h3>
          <ul className="text-sm text-gray-700">
            <li className="mb-1">
              Time of Birth:{" "}
              <span className="font-medium">
                {data?.personalInfo?.timeOfBirth || "N/A"}
              </span>
            </li>
            <li className="mb-1">
              Rashi:{" "}
              <span className="font-medium">
                {data?.personalInfo?.rashi || "N/A"}
              </span>
            </li>
            <li className="mb-1">
              Nakshatra:{" "}
              <span className="font-medium">
                {data?.personalInfo?.nakshatra || "N/A"}
              </span>
            </li>
            <li className="mb-1">
              Complexion:{" "}
              <span className="font-medium">
                {data?.personalInfo?.complexion || "N/A"}
              </span>
            </li>
            <li className="mb-1">
              Height:{" "}
              <span className="font-medium">
                {data?.personalInfo?.height || "N/A"}
              </span>
            </li>
            <li className="mb-1">
              Gotra:{" "}
              <span className="font-medium">
                {data?.personalInfo?.gotra || "N/A"}
              </span>
            </li>
            <li className="mb-1">
              Qualification:{" "}
              <span className="font-medium">
                {data?.education?.qualification || "N/A"}
              </span>
            </li>
            <li className="mb-1">
              Work:{" "}
              <span className="font-medium">
                {data?.education?.occupation || "N/A"}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Family Details Section */}
      <div className="bg-orange-50 p-6 border-t border-gray-300">
        <h3 className="text-lg font-semibold text-orange-700 mb-4">
          Family Details
        </h3>
        <ul className="text-sm text-gray-700">
          <li className="mb-1">
            Father's Name:{" "}
            <span className="font-medium">
              {data?.familyInfo?.fatherName || "N/A"}
            </span>
          </li>
          <li className="mb-1">
            Father's Occupation:{" "}
            <span className="font-medium">
              {data?.familyInfo?.fatherOccupation || "N/A"}
            </span>
          </li>
          <li className="mb-1">
            Mother's Name:{" "}
            <span className="font-medium">
              {data?.familyInfo?.motherName || "N/A"}
            </span>
          </li>
          <li className="mb-1">
            Mother's Occupation:{" "}
            <span className="font-medium">
              {data?.familyInfo?.motherOccupation || "N/A"}
            </span>
          </li>
          <li className="mb-1">
            Siblings:{" "}
            <span className="font-medium">
              {data?.familyInfo?.siblings || "N/A"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};