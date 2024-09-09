import imgResident from "/public/Assests/residents.png";

function ResidentAloqa() {
  return (
    <div className="pb-20">
      <div className="container">
        <div className="relative left-0 top-0">
          <div className="absolute left-1/2 top-2/4 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-5">
            <h3 className="uppercase font-medium text-white text-[20px]">
              Rezident bo'lish
            </h3>
            <button className="group flex items-center cursor-pointer transition-all duration-200 px-12 py-3 bg-btnColor rounded-[8px] hover:text-white gap-3">
              <svg viewBox="0 0 384 512" className="w-[20px] transition-all duration-200 group-hover:fill-white">
                <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
              </svg>
              Topshirish
            </button>
          </div>
          <img
            className="border-1 border-border-color rounded-2xl object-cover h-[300px]"
            src={imgResident}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ResidentAloqa;
