// Report.jsx

import ResumeUploadDialog from '@/app/(routes)/dashboard/_components/ResumeUploadDialog';
import React, { useState } from 'react';

// Placeholder Sparkles component
const Sparkles = () => (
  <span style={{ marginLeft: '4px', display: 'inline-block', color: 'white', fontWeight: 'bold' }}>✦</span>
);

function Report({ aiReport }: any) {

    const [openResumeUpload, setOpenResumeDialog] = useState(false);

  // Add a loading state to prevent errors if aiReport is not yet available
  if (!aiReport) {
    return (
      <div className="p-4 sm:p-6 text-center text-gray-600 h-full flex items-center justify-center">
        Loading AI Report...
      </div>
    );
  }

  return (
    // Adjusted padding for smaller screens (p-4 on mobile, p-6 on small screens and up)
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        {/* Adjusted font size for mobile (text-2xl on mobile, text-3xl on small screens and up) */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">AI Analysis Results</h2>
        <button
          type="button" onClick={() => setOpenResumeDialog(true)}
          className="bg-black text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 py-2.5 shadow-sm flex items-center justify-center"
        >
          Re-analyze <Sparkles />
        </button>
      </div>

      {/* Overall Score */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-md p-6 mb-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <i className="fas fa-star text-yellow-300 mr-2"></i> Overall Score
        </h3>
        <div className="flex items-center justify-between mb-4">
          {/* Adjusted font size for mobile (text-5xl on mobile, text-6xl on small screens and up) */}
          <span className="text-5xl sm:text-6xl font-extrabold">{aiReport?.overall_score}<span className="text-2xl">/100</span></span>
          {/* Using dynamic overall_feedback directly */}
          <div className="text-lg sm:text-xl font-extrabold">{aiReport?.overall_feedback}</div>
        </div>
        <div className="w-full bg-white bg-opacity-30 rounded-full h-2.5 mb-4">
          {/* Progress bar width based on overall_score directly */}
          <div className="bg-white h-2.5 rounded-full" style={{ width: `${aiReport?.overall_score}%` }}></div>
        </div>
        {/* Using dynamic summary_comment directly */}
        <p className="text-white text-sm">{aiReport?.summary_comment}</p>
      </div>

      {/* Individual Scores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-address-book text-gray-500 mr-2"></i> Contact Info</h4>
          {/* Using dynamic score and comment for Contact Info directly */}
          <span className="text-3xl sm:text-4xl font-bold text-green-600">{aiReport?.sections?.contact_info?.score}%</span>
          <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.contact_info?.comment}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-briefcase text-gray-500 mr-2"></i> Experience</h4>
          {/* Using dynamic score and comment for Experience directly */}
          <span className="text-3xl sm:text-4xl font-bold text-green-600">{aiReport?.sections?.experience?.score}%</span>
          <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.experience?.comment}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-graduation-cap text-gray-500 mr-2"></i> Education</h4>
          {/* Using dynamic score and comment for Education directly */}
          <span className="text-3xl sm:text-4xl font-bold text-orange-500">{aiReport?.sections?.education?.score}%</span>
          <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.education?.comment}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-lightbulb text-gray-500 mr-2"></i> Skills</h4>
          {/* Using dynamic score and comment for Skills directly */}
          <span className="text-3xl sm:text-4xl font-bold text-red-500">{aiReport?.sections?.skills?.score}%</span>
          <p className="text-sm text-gray-600 mt-2">{aiReport?.sections?.skills?.comment}</p>
        </div>
      </div>

      {/* Tips for Improvement */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
          <i className="fas fa-lightbulb text-orange-400 mr-2"></i> Tips for Improvement
        </h3>
        <ol className="list-none space-y-4">
          {/* Dynamically rendering tips_for_improvement directly */}
          {aiReport?.tips_for_improvement?.map((tip: string, index: number) => (
            <li key={index} className="flex items-start">
<span className="flex-shrink-0 w-2 h-2 rounded-full bg-black mt-2 mr-4"></span>              <div>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: tip }}></p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* What's Good / Needs Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center">
            <i className="fas fa-check-circle text-green-500 mr-2"></i> What's Good
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
            {/* Dynamically rendering whats_good directly */}
            {aiReport?.whats_good?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center">
            <i className="fas fa-times-circle text-red-500 mr-2"></i> Needs Improvement
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
            {/* Dynamically rendering needs_improvement directly */}
            {aiReport?.needs_improvement?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upgrade to Premium */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg shadow-md p-6 mb-6 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to refine your resume? 💡</h3>
        <p className="text-sm sm:text-base mb-4">Make your application stand out with our premium insights and features.</p>
        <button type="button" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          Upgrade to Premium
        </button>
      </div>

      <ResumeUploadDialog openResumeUpload={openResumeUpload} setOpenResumeDialog={()=>setOpenResumeDialog(false)} />
    </div>
  );
}

export default Report;