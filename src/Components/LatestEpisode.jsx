import "../style/LatestEpisode.css";

import EpisodeUzbekistanClub from "/public/SecondImg.jpg";

export default function LatestEpisode() {
  return (
    <div className="container-v episode-wrapper">
      <article className="flex justify-between mb-[35px]">
        <h1 className="text-5xl uppercase font-semibold text-white">
          Latest episodes
        </h1>
        <article className="flex items-center gap-4 cursor-pointer episode-all">
          <p className=" font-light text-[17px] text-white">All episode</p>
          <svg viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </article>
      </article>
      <div className="content-Episode flex gap-[40px]">
        <a className="episode-wrapper-img" href="#1">
          <div className="filt"></div>
          <img width={"900px"} src={EpisodeUzbekistanClub} alt="" />
        </a>
        <div className="Episode-List-Wrapper">
          <article className="mb-5">
            <h1 className="font-normal text-[20px] text-white mb-2 cursor-pointer duration-[0.2s] hover:text-[#fec775]">
              O`zbekistonlik. Students | Episode 1
            </h1>
            <h4 className="text-[15px] font-normal uppercase text-[#fec775] mb-[15px] ">
              Students
            </h4>
            <div className="w-full h-[1px] bg-gray-500 opacity-[0.3] rounded-2xl"></div>
          </article>
          <article className="mb-5">
            <h1 className="font-normal text-[20px] text-white mb-2 cursor-pointer duration-[0.2s] hover:text-[#fec775]">
              O`zbekistonlik | Episode 3 | Official Teaser | (4K)
            </h1>
            <h4 className="text-[15px] font-normal uppercase text-[#fec775] mb-[15px]">
              O`ZBEKISTONLIK
            </h4>
            <div className="w-full h-[1px] bg-gray-500 opacity-[0.3] rounded-2xl"></div>
          </article>
          <article className="mb-5">
            <h1 className="font-normal text-[20px] text-white mb-2 cursor-pointer duration-[0.2s] hover:text-[#fec775]">
              O`zbekistonlik | Episode 2
            </h1>
            <h4 className="text-[15px] font-normal uppercase text-[#fec775] mb-[15px]">
              O`ZBEKISTONLIK
            </h4>
            <div className="w-full h-[1px] bg-gray-500 opacity-[0.3] rounded-2xl"></div>
          </article>
          <article>
            <h1 className="font-normal text-[20px] text-white mb-2 cursor-pointer duration-[0.2s] hover:text-[#fec775]">
              O`zbekistonlik | Episode 2 | Official Teaser
            </h1>
            <h4 className="text-[15px] font-normal uppercase text-[#fec775] mb-[15px]">
              O`ZBEKISTONLIK
            </h4>
          </article>
        </div>
      </div>
    </div>
  );
}
