import React from "react";

export default function Header() {
  return (
      <header className="flex justify-between items-center xl:px-[10%] px-[2%] py-3 lg:h-[11.2vh] lg:py-0 sticky bg-blue-500 top-0 shadow-md">
        <div>
          <div className=" text-white flex flex-col">
            <span className="font-bold text-3xl ">Booktopia</span>
            <span className="sm:block hidden"> Your Ultimate Online Book Destination</span>
          </div>
        </div>
        <nav className="flex gap-10 justify-center items-center">
          <ul className="flex gap-5 font-semibold text-white text- text-lg">
            <li>
              <a href="#">Product</a>
            </li>
            <li className="xxs:block hidden">
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <button class="transition ease-in-out delay-150 text-white py-2 px-4 rounded-md md:flex hidden  bg-[#ebc87d]  hover:-translate-y-1 hover:scale-110  duration-300 ...">
            Read Now
          </button>
        </nav>
      </header>
  );
}
