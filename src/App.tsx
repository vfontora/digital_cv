import { ArrowCircleDown, Copyright } from "@phosphor-icons/react";

export function App() {
  return (
    <div>
      {/* MENU AND HOMEPAGE*/}
      <div className="bg-[#F8F7FB] h-screen p-8 flex flex-col">
        <header className="flex flex-row justify-between items-center">
          <h1 className="text-[#392B4A] font-bold font-lato text-3xl motion-preset-typewriter-[12] motion-loop-once">
            Hi, I'm Vitória.
          </h1>

          <nav>
            <ul className="list-none flex flex-row gap-4 text-[#58446E] font-biryani text-base">
              <li>
                <a
                  href="https://www.linkedin.com/in/vitoria-fontora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LI
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/vitoriafontora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BĒ
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vfontora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GH
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* HOMEPAGE */}
        <div className="flex-grow flex justify-center items-center">
          <div className="flex flex-row text-center items-center gap-10">
            <img
              className="w-[215px] rounded-full"
              src="/Mask group.png"
              alt="profile picture"
            />
            <div className="flex flex-col items-end text-center w-[680px]">
              <h1 className="text-[#392B4A] font-bold font-lato text-5xl pb-8 text-left">
                Where user experience meets seamless code.
              </h1>
              <button
                className="font-biryani text-base text-[#F8F7FB] bg-[#392B4A] rounded-3xl w-[125px] py-2 px-4 flex justify-center items-center font-bold drop-shadow-2xl motion-preset-oscillate "
                onClick={() =>
                  (window.location.href =
                    "mailto:vfontora@hotmail.com?subject=Let's talk!&body=I need your help with my project!")
                }
              >
                Let's talk!
              </button>
              <img src="/Group 1.png" className="w-14 pt-1 pl-4" />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="bg-[#DDDBE5] rounded-3xl py-20 px-[150px]">
        <h1 className="text-[#392B4A] font-bold font-lato text-3xl pb-12">
          Here's the scoop on me:
        </h1>
        <div className="flex flex-row">
          <div className="pr-4">
            <p className="font-biryani text-base text-[#392B4A] pr-4 font-bold pb-8">
              Graduated in UX Design & Front-end Development from EDIT in 2024.
            </p>
            <p className="font-biryani text-base text-[#392B4A] pr-10 leading-loose">
              I'm a passionate UX designer and front-end developer with a keen
              eye for detail and a drive to create seamless, user-centered
              digital experiences. Recently graduated and eager to make an
              impact, I blend design thinking with technical skills to craft
              interfaces that not only look good but also feel intuitive and
              accessible. I believe that great design starts with empathy, and
              I'm committed to building solutions that connect with users on a
              meaningful level. <br /> When I'm not designing or coding, I'm
              constantly learning new techniques and keeping up with the latest
              trends in technology. I'm excited to bring fresh ideas and a
              collaborative spirit to any project I work on!
            </p>
          </div>
          <img src="/Group 2.png" className="h-[450px]" />
        </div>
      </div>

      {/* SERVICES AND PORTEFOLIO */}
      <div className="py-20 px-[150px]">
        <h1 className="text-[#392B4A] font-bold font-lato text-3xl pb-16">
          Now - wanna hear about my digital superpowers?
        </h1>

        <div className="flex flex-row justify-between">
          <img src="/Group 3.png" className="h-[350px]" />
          <img src="/Group 4.png" className="h-[350px]" />
        </div>

        <div className="flex flex-row justify-between items-center pt-20">
          <div className="flex flex-row gap-2">
            <p className="font-biryani text-base text-[#392B4A]">
              Take a peak{" "}
            </p>
            <ArrowCircleDown size={24} className="text-[#392b4a]" />
          </div>
          <a
            className="font-biryani text-base text-[#392B4A] underline decoration-wavy underline-offset-4 decoration-1 decoration-[#392B4A]"
            href="https://www.behance.net/vitoriafontora"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </a>
        </div>

        <div className="flex flex-row justify-between pb-20 pt-10">
          <img
            src="/Group 5.png"
            className="h-[350px] hover:motion-preset-shake motion-ease-spring-smooth "
          />
          <img
            src="/Group 6.png"
            className="h-[350px] hover:motion-preset-shake"
          />
          <img
            src="/Group 7.png"
            className="h-[350px] hover:motion-preset-shake"
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-[#DDDBE5] rounded-3xl pt-44 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[#392B4A] font-bold font-lato text-5xl pb-8 text-center">
            Got a project in mind?
          </h1>

          <button
            className="font-biryani text-base text-[#F8F7FB] bg-[#392B4A] rounded-3xl py-2 px-4 flex justify-center items-center font-bold w-[185px] drop-shadow-2xl motion-preset-oscillate "
            onClick={() =>
              (window.location.href =
                "mailto:vfontora@hotmail.com?subject=Let's talk!&body=I need your help with my project!")
            }
          >
            E-mail me
          </button>

          <img src="/Group 9.png" className="pl-6" />
        </div>

        <hr className="mt-[125px] border-t-[#B1A1CF] mx-8" />

        <div className="flex flex-row justify-between py-2 px-8">
          <div className="flex flex-row gap-2 justify-center items-center">
            <Copyright size={16} className="text-[#8061A0]" />
            <p className="text-[#8061A0] text-[14px] font-biryani">
              Vitória Fontora, 20204. All rights reserved.
            </p>
          </div>

          <nav>
            <ul className="list-none flex flex-row gap-4 text-[#8061A0] font-biryani text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/vitoria-fontora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LI
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/vitoriafontora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BĒ
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vfontora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GH
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
