import { useNavigate } from "react-router-dom";


const DownloadTab = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed right-0 top-1/3 z-[9999]">
      <div onClick={() => navigate('/contact')} className="bg-yellow-400 text-black w-12 h-40 rounded-l-lg shadow-lg cursor-pointer hover:bg-yellow-300 transition-colors flex items-center justify-center">
        <div className="-rotate-90 text-sm font-semibold whitespace-nowrap">
                Download Brochure
        </div>
      </div>
    </div>
  );
};

export default DownloadTab;
