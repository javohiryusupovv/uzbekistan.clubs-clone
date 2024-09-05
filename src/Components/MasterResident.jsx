import img1 from "/public/Assests/masterResident/img2.jpg";
import img2 from "/public/Assests/masterResident/img5.jpg";
import img3 from "/public/Assests/masterResident/img3.jpg";
import img4 from "/public/Assests/masterResident/img4.jpg";
import img5 from "/public/Assests/masterResident/img1.jpg";
import img6 from "/public/Assests/masterResident/img6.jpg";
import img7 from "/public/Assests/masterResident/img7.jpg";
import img8 from "/public/Assests/masterResident/img8.jpg";
import img9 from "/public/Assests/masterResident/img9.jpg";
import img10 from "/public/Assests/masterResident/img10.jpg";
import img11 from "/public/Assests/masterResident/img11.jpg";

import "../style/MasterResident.css";

function MasterResident() {
  return (
    <div className="container mb-bottom">
      <article className="flex justify-between items-center mb-[35px]">
        <h1 className="text-5xl uppercase font-semibold text-white">
          Master residents
        </h1>
        <article className="flex items-center gap-4 cursor-pointer episode-all">
          <p className=" font-light text-[17px] text-white">All residents</p>
          <svg viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </article>
      </article>
      <div className="resident-master-wrapper">
        <div className="master-resident-child1">
          <div className="relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img1} alt="" />
          </div>
          <div className=" relative top-0 left-0">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img2} alt="" />
          </div>
          <div className=" relative top-0 left-0">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img3} alt="" />
          </div>
          <div className=" relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img4} alt="" />
          </div>
        </div>
        <div className="master-resident-child2">
          <div className="relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img5} alt="" />
          </div>
          <div className=" relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img6} alt="" />
          </div>
        </div>
        <div className="master-resident-child3">
          <div className="relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img7} alt="" />
          </div>
          <div className=" relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img8} alt="" />
          </div>
          <div className=" relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img9} alt="" />
          </div>
        </div>
        <div className="master-resident-child4">
          <div className="relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img10} alt="" />
          </div>
          <div className=" relative top-0 left-0 col-span-2">
            <div className="absolute left-0 top-0 resident-img cursor-pointer"></div>
            <img className="w-full h-full object-cover rounded-[10px]" src={img11} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterResident;
