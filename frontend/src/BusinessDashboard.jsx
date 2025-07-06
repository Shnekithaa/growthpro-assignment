import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessInsights from './components/BusinessInsights';
import { validateForm } from './utils/validators';

const BusinessDashboard = () => {
  const [formData, setFormData] = useState({ name: '', location: '' });
  const [businessData, setBusinessData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    setIsLoading(true);
    try {
      const res = await fetch('https://growthpro-assignment-84bk.onrender.com/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setBusinessData(data);
    } catch (err) {
      setErrors({ general: 'Failed to fetch data' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    setIsRegenerating(true);
    try {
      const res = await fetch(
        `https://growthpro-assignment-84bk.onrender.com/regenerate-headline?name=${encodeURIComponent(formData.name)}&location=${encodeURIComponent(formData.location)}`
      );
      const data = await res.json();
      setBusinessData((prev) => ({ ...prev, headline: data.headline }));
    } catch (err) {
      console.error('Headline error:', err);
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/60 backdrop-blur-lg rounded-xl border border-gray-200 shadow-lg">
              📈
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Business Dashboard</h1>
          </div>
          <p className="text-gray-600 text-lg">Discover your local business insights and SEO potential</p>
        </div>
        <BusinessForm
          formData={formData}
          errors={errors}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        {businessData && (
          <BusinessInsights
            formData={formData}
            businessData={businessData}
            isRegenerating={isRegenerating}
            onRegenerate={handleRegenerateHeadline}
          />
        )}
      </div>
    </div>
  );
};

export default BusinessDashboard;
