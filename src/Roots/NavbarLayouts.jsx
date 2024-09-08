import { Outlet, Link } from "react-router-dom";
import Logo from "/public/Assests/img/logo.svg";
import { useEffect, useState } from "react";

function NavbarRoot() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);


  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY > 900){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return() => {
      window.addEventListener('scroll', handleScroll)
    }

  }, [])

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const LinkRoute = [
    { path: "/about", name: "About us" },
    { path: "/projects", name: "Projects" },
    { path: "/master-residents", name: "Master Residents" },
    { path: "/residents", name: "Residents" },
    { path: "/media-residents", name: "Media Residents" },
  ];

  return (
    <>
      <header className={`container-w ${scrolled ? " bg-[#202020] shadow-md shadow-[#212121]" : "bg-transparent"}`}>
        <nav className='nav-w flex justify-between items-center px-4 py-4'>
          <article className="flex items-center gap-16">
            <a href="/">
              <img width={125} src={Logo} alt="Logo" />
            </a>
            <ul className="flex gap-10 items-center nav-list">
              {LinkRoute.map((item, index) => (
                <li
                  key={index}
                  className={`nav-child ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "dimmed"
                      : ""
                  } ${hoveredIndex === index ? "hovered" : ""}`}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                >
                  <Link to={item.path} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <div className="relative top-0 left-0">
            <article className="flex items-center bg-red-200 gap-3 px-3 py-2 rounded-3xl cursor-pointer lang">
              <svg className="w-5" viewBox="0 0 512 512">
                <path
                  fill="white"
                  d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"
                />
              </svg>
              <p className="text-white uppercase font-bold text-sm">English</p>
            </article>
            <ul className=" absolute top-10 right-0 w-[200px] overflow-hidden bg-[#141414] rounded-2xl flex flex-col justify-between">
              <li className="text-[20px] py-2 text-center border-b border-[#333232] cursor-pointer text-white group-hover:bg-[#4b4a49]">O'zbek</li>
              <li className="text-[20px] py-2 text-center border-b border-[#2b2a2a] cursor-pointer text-white group-hover:bg-[#484847]">English</li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default NavbarRoot;
