export default function EasyIntegrationCard({
  title = "Easy Integration",
  imgSrc = "/mnt/data/062f1bab-ecf8-44e5-9894-b1134fd22497.png",
}) {
  return (
    <div className="min-w-[170px] h-[180px] bg-[#ffffff] rounded-3xl flex flex-col items-center justify-center shadow-g">
      <div className="w-[88px] h-[88px] rounded-full mt-1 m-5 overflow-hidden flex items-center justify-center ">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover "
        />
      </div>
      <p className="text-[16px] font-medium text-gray-800 text-center">
        {title}
      </p>
    </div>
  );
}
