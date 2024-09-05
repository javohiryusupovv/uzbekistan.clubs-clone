import img1 from '/public/Assests/VatandoshImg/futbolClub.jpg';
import img2 from '/public/Assests/VatandoshImg/student.jpg';
import img3 from '/public/Assests/VatandoshImg/cityHall.jpg';


function CompatriotNews() {
  return (
    <>
    <div className=" py-[80px] bg-[#212121]">
      <div className="container">
        <article className="flex justify-between items-center mb-[35px]">
          <h1 className="text-5xl uppercase font-semibold text-white">
            Vatandosh News
          </h1>
          <article className="flex items-center gap-4 cursor-pointer episode-all">
            <p className=" font-light text-[17px] text-white">All news</p>
            <svg viewBox="0 0 320 512">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </article>
        </article>
        <div>
            <div className="grid grid-cols-3 gap-5">
            <div className='py-[12px] px-5 rounded-xl bg-[#141414] cursor-pointer border-1 duration-500 border-transparent group hover:border-1 hover:border-border-color'>
                    <a className='flex items-center gap-4' href="#1">
                        <img className='w-[112px] h-[140px] object-cover rounded-[6px]' src={img1} alt="" />
                        <p className=' line-clamp-3 font-normal text-[18px] text-white duration-300  group-hover:text-color group-hover:text-textColor'>Men O‘zbekistonlikman – Qonimda g‘alaba</p>
                    </a>
                </div>
                <div className='py-[12px] px-5 rounded-xl bg-[#141414] cursor-pointer border-1 duration-500 border-transparent group hover:border-1 hover:border-border-color'>
                <a className='flex items-center gap-4' href="#1">
                        <img className='w-[112px] h-[140px] object-cover rounded-[6px]' src={img2} alt="" />
                        <p className=' line-clamp-3 font-normal text-[18px] duration-300 text-white group-hover:text-color group-hover:text-textColor'>O‘zbekistonlik yana bir olim AQShning nufuzli universitetida fan doktori bo‘ldi</p>
                    </a>
                </div>
                <div className='py-[12px] px-5 rounded-xl bg-[#141414] cursor-pointer border-1 duration-500 border-transparent group hover:border-1 hover:border-border-color'>
                    <a className='flex items-center gap-4' href="#1">
                        <img className='w-[112px] h-[140px] object-cover rounded-[6px]' src={img3} alt="" />
                        <p className=' line-clamp-3 font-normal text-[18px] text-white duration-300 group-hover:text-color group-hover:text-textColor'>Garvard'ning ilk oʻzbekistonlik fan doktori "Oʻzbekistonlik" filmining 5-epizodi qahramoni</p>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CompatriotNews;
