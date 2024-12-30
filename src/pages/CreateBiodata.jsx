import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import BiodataForm from '../components/BiodataForm';
import BiodataPreview from '../components/BiodataPreview';
import TemplateSelector from '../components/TemplateSelector';
import { biodataSchema } from '../validation/biodataSchema';
import { downloadAsPDF, downloadAsImage } from '../utils/downloadUtils';

export default function CreateBiodata() {
  const [photo, setPhoto] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('traditional');

  const form = useForm({
    resolver: zodResolver(biodataSchema),
    defaultValues: {
      personalInfo: {
        fullName: '',
        dateOfBirth: '',
        gender: 'male',
        height: '',
        weight: '',
        religion: '',
        maritalStatus: 'single',
      },
      contactInfo: {
        email: '',
        phone: '',
        address: '',
      },
      education: {
        highestQualification: '',
        institution: '',
        occupation: '',
        income: '',
      },
      familyInfo: {
        fatherName: '',
        motherName: '',
        siblings: '',
      },
    },
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-32">
        {/* Decorative elements */}
        {/* <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-gray-800 mb-4">Create Your Biodata</h1>
            <p className="text-gray-600">Design your perfect marriage biodata with our beautiful templates</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90"
            >
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
              />
              <BiodataForm
                form={form}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                handlePhotoChange={handlePhotoChange}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90"
            >


              <div className="overflow-auto max-h-[800px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <BiodataPreview
                  data={form.watch()}
                  photo={photo}
                  template={selectedTemplate}
                />
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button
                  // onClick={downloadAsPDF}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Download PDF
                </button>
                <button
                  // onClick={downloadAsImage}
                  className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-full hover:from-pink-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Download Image
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}