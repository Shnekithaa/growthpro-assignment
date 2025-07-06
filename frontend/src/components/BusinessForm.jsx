import React from 'react';
import { TrendingUp } from 'lucide-react';
import Loader from './Loader';

const BusinessForm = ({ formData, errors, isLoading, handleInputChange, handleSubmit }) => (
  <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200 p-8 mb-8 shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
      <TrendingUp className="w-6 h-6 text-blue-600" />
      Business Information
    </h2>

    {errors.general && (
      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600 text-sm">{errors.general}</p>
      </div>
    )}

    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {['name', 'location'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field === 'name' ? 'Business Name' : 'Location'}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border ${
                errors[field] ? 'border-red-300' : 'border-gray-300'
              } rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300`}
              placeholder={`Enter your ${field}`}
            />
            {errors[field] && <p className="mt-1 text-sm text-red-500">{errors[field]}</p>}
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
      >
        {isLoading ? <><Loader /> Analyzing Business...</> : 'Get Business Insights'}
      </button>
    </div>
  </div>
);

export default BusinessForm;
