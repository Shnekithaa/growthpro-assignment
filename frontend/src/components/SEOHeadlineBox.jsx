import { RefreshCw } from 'lucide-react';

const SEOHeadlineBox = ({ headline, onRegenerate, isRegenerating }) => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-800">AI-Generated SEO Headline</h3>
      <button
        onClick={onRegenerate}
        disabled={isRegenerating}
        className="bg-white/80 hover:bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-300 flex items-center gap-2 text-sm disabled:opacity-50"
      >
        <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
        {isRegenerating ? 'Generating...' : 'Regenerate'}
      </button>
    </div>
    <p className="text-gray-700 text-lg leading-relaxed">{headline}</p>
  </div>
);

export default SEOHeadlineBox;
