const InfoCard = ({ label, value, icon }) => (
  <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-6 text-center shadow-sm">
    <div className="flex items-center justify-center gap-1 mb-2">
      {icon}
      <span className="text-2xl font-bold text-gray-800">{value}</span>
    </div>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

export default InfoCard;
