import "../style/LatestEpisode.css";

import EpisodeUzbekistanClub from '/public/SecondImg.jpg'

export default function LatestEpisode() {
  return (
    <div className="container">
      <article className="flex justify-between mb-[35px]">
        <h1 className="text-5xl uppercase font-semibold text-white">
          Latest episodes
        </h1>
        <article className="flex items-center gap-5 cursor-pointer episode-all">
          <p className=" font-light text-[20px] text-white">All episode</p>
          <svg viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </article>
      </article>
      <div className="content-Episode flex">
        <a className="episode-wrapper-img" href="#1">
          <img  width={"800px"} src={EpisodeUzbekistanClub} alt="" />
        </a>
        <div className="Episode-List-Wrapper">
          <article>
              <h1>O'zbekistonlik. Students | Episode 1</h1>
              <h4>Students</h4>
          </article>
          <article>
              <h1>O'zbekistonlik. Students | Episode 1</h1>
              <h4>Students</h4>
          </article>
          <article>
              <h1>O'zbekistonlik. Students | Episode 1</h1>
              <h4>Students</h4>
          </article>
        </div>
      </div>
    </div>
  );
}
