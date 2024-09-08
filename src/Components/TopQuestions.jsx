import img1 from '/public/Assests/Questions/questionImg1.jpg';
import img2 from '/public/Assests/Questions/questionImg2.jpg';
import img3 from '/public/Assests/Questions/questionImg3.jpg';
import img4 from '/public/Assests/Questions/questionImg4.jpg';

import '../style/TopQuestion.css'


function TopQuestions() {
  return (
    <>
    <div className="py-[80px] bg-[#212121]">
      <div className="container">
        <article className="flex justify-between items-center mb-[35px]">
          <h1 className="text-5xl uppercase font-semibold text-white">
            Top questions
          </h1>
          <article className="flex items-center gap-4 cursor-pointer episode-all">
            <p className=" font-light text-[17px] text-white">All analytics</p>
            <svg viewBox="0 0 320 512">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </article>
        </article>
        <div className='grid grid-cols-4 gap-5'>
          <div className='group relative top-0 left-0 h-[166px] overflow-hidden cursor-pointer'>
            <img className='absolute left-0 top-0 h-full object-cover filter brightness-[70%] border border-transparent rounded-[8px] group-hover:border group-hover:border-orange-400 group-hover:border-opacity-5' src={img1} alt="img" />
            <div className="absolute top-0 left-0 w-full h-full rounded-[8px] transition-all duration-200 group-hover:bg-customColor"></div>
            <div className='absolute bottom-3 left-3'>
              <p className='text-white text-[19px] font-light'>Who are master residents?</p>
            </div>
          </div>
          <div className='group relative top-0 left-0 h-[166px] overflow-hidden cursor-pointer'>
            <img className='absolute left-0 top-0 h-full object-cover filter brightness-[70%] border border-transparent rounded-[8px] group-hover:border group-hover:border-orange-400 group-hover:border-opacity-5' src={img2} alt="img" />
            <div className="absolute top-0 left-0 w-full h-full rounded-[8px] transition-all duration-200 group-hover:bg-customColor"></div>
            <div className='absolute bottom-3 left-3'>
              <p className='text-white text-[19px] font-light'>Who are residents?</p>
            </div>
          </div>
          <div className='group relative top-0 left-0 h-[166px] overflow-hidden cursor-pointer'>
            <img className='absolute left-0 top-0 h-full object-cover filter brightness-[70%] border border-transparent rounded-[8px] group-hover:border group-hover:border-orange-400 group-hover:border-opacity-5' src={img3} alt="img" />
            <div className="absolute top-0 left-0 w-full h-full rounded-[8px] transition-all duration-200 group-hover:bg-customColor"></div>
            <div className='absolute bottom-3 left-3'>
              <p className='text-white text-[19px] font-light'>Who are media residents?</p>
            </div>
          </div>
          <div className='group relative top-0 left-0 h-[166px] overflow-hidden cursor-pointer'>
            <img className='absolute left-0 top-0 h-full object-cover filter brightness-[70%] border border-transparent rounded-[8px] group-hover:border group-hover:border-orange-400 group-hover:border-opacity-5' src={img4} alt="img" />
            <div className="absolute top-0 left-0 w-full h-full rounded-[8px] transition-all duration-200 group-hover:bg-customColor"></div>
            <div className='absolute bottom-3 left-3'>
              <p className='text-white text-[19px] font-light'>What is O'zbekistanlik Forum?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TopQuestions;
