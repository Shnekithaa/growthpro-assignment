import React from 'react';
import { MapPin, Star } from 'lucide-react';
import InfoCard from './InfoCard';
import SEOHeadlineBox from './SEOHeadlineBox';

const BusinessInsights = ({ formData, businessData, isRegenerating, onRegenerate }) => (
  <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200 p-8 shadow-lg">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <Star className="w-6 h-6 text-yellow-500" /> Business Analytics
      </h2>
      <div className="flex items-center gap-2 text-gray-600">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{formData.location}</span>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <InfoCard label="Google Rating" value={businessData.rating} icon={<Star className="w-5 h-5 text-yellow-500 fill-current" />} />
      <InfoCard label="Total Reviews" value={businessData.reviews} />
      <InfoCard label="Business Profile" value={formData.name} />
    </div>

    <SEOHeadlineBox
      headline={businessData.headline}
      onRegenerate={onRegenerate}
      isRegenerating={isRegenerating}
    />
  </div>
);

export default BusinessInsights;
