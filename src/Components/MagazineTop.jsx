import "../style/Magazine.css";

import top1 from "/public/Assests/topMagazine/top1.jpg";
import top2 from "/public/Assests/topMagazine/top2.jpg";
import top3 from "/public/Assests/topMagazine/top3.jpg";
import top4 from "/public/Assests/topMagazine/top4.jpg";
import top5 from "/public/Assests/topMagazine/top5.jpg";
import top6 from "/public/Assests/topMagazine/top6.jpg";

function MagazineTop() {
  return (
    <div className="container-v">
      <article className="flex justify-between items-center mb-[35px]">
        <h1 className="text-5xl uppercase font-semibold text-white">
          UZBEKISTAN’S CLUB MAGAZINE
        </h1>
        <article className="flex items-center gap-4 cursor-pointer episode-all">
          <p className=" font-light text-[17px] text-white">All TOP</p>
          <svg viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </article>
      </article>
      <div className="grid grid-cols-6 gap-5 mb-bottom">
        <div className="child-top">
          <article className="magazine-child mb-4">
            <div className="img-mask"></div>
            <img src={top1} alt="" />
          </article>
          <p className="text-white font-medium">UZBEKISTAN’S CLUB MAGAZINE</p>
        </div>
        <div className="child-top">
          <article className="magazine-child">
            <div className="img-mask"></div>
            <img src={top2} alt="" />
          </article>
          <p className="text-white font-medium">UZBEKISTAN’S CLUB MAGAZINE</p>

        </div>
        <div className="child-top">
          <article className="magazine-child">
            <div className="img-mask"></div>
            <img src={top3} alt="" />
          </article>
          <p className="text-white font-medium">UZBEKISTAN’S CLUB MAGAZINE</p>

        </div>
        <div className="child-top">
          <article className="magazine-child">
            <div className="img-mask"></div>
            <img src={top4} alt="" />
          </article>
          <p className="text-white font-medium">UZBEKISTAN’S CLUB MAGAZINE</p>

        </div>
        <div className="child-top">
          <article className="magazine-child">
            <div className="img-mask"></div>
            <img src={top5} alt="" />
          </article>
          <p className="text-white font-medium">UZBEKISTAN’S CLUB MAGAZINE</p>

        </div>
        <div className="child-top">
          <article className="magazine-child">
            <div className="img-mask"></div>
            <img src={top6} alt="" />
          </article>
          <p className="text-white font-medium">UZBEKISTAN’S CLUB MAGAZINE</p>

        </div>
      </div>
    </div>
  );
}

export default MagazineTop;
