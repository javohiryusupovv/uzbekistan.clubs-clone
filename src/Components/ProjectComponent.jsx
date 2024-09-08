import { useEffect, useState } from "react";
import img1 from "/public/Assests/projects1.jpg";
import img2 from "/public/Assests/projects2.jpg";
import img3 from "/public/Assests/projects3.jpg";
import img4 from "/public/Assests/projects4.jpg";


function ProjectComponent() {

  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    fetch('https://uzbekistans.club/api/v1/projects/')
    .then((response)=> response.json())
    .then((data)=> setProjects(data.results))
  }, [])

  return (
    <>
      <div className="py-[50px]">
        <div className="container">
          <article className="flex justify-between items-center mb-[35px]">
            <h1 className="text-5xl uppercase font-semibold text-white">
              Projects
            </h1>
            <article className="flex items-center gap-4 cursor-pointer episode-all">
              <p className=" font-light text-[17px] text-white">All projects</p>
              <svg viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </article>
          </article>
          <div className="grid grid-cols-3 gap-[20px]">
            {projects.map((projects, index)=> (
              <div key={index}>
                <a href="#1">
                  <div className="group relative left-0 top-0 w-full h-[303px] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full z-40 group-hover:bg-customColor transition-all duration-300"></div>
                    <div className="absolute left-0 top-0 z-20 w-full h-full">
                      <img className="w-full h-[230px] rounded-xl scale-[0.9] object-cover group-hover:rounded-none group-hover:scale-[1] group-hover:!h-[303px] transition-all duration-700"
                        src={projects.pictures[0]}
                        alt=""/>
                    </div>
                    <div className="absolute bottom-3 z-20 left-7">
                      <h3 className="text-[20px] text-white font-semibold uppercase">
                        {projects.title}
                      </h3>
                      <p className="text-[17px] transition-all duration-200 text-[#808080] group-hover:text-[#f3bc6b]">
                        {projects.slug}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectComponent
