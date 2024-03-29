import React from "react";
import profilePic from '../../../../public/img/profile-pic.jpg'
import ArrowIcon from "../../../components/Icons/ArrowIcon";
import Image from 'next/image'

export default function AboutMe(props) {
    const technologies = [
        ["JavaScript (ES6+)", "Angular", "Next.js", "git", "Tailwind CSS"],
        ["TypeScript", "React", "TypeScript", "Rxjs", "Redux"],
    ];
    return (
        <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
            {/* // ? 0.1 About Me */}
            <div
                className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px]
        md:w-[700px] lg:w-[900px] "
            >
                <div className="flex flex-row items-center ">
                    <div className="flex flex-row  items-center mr-4">
                        <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"}/>
                        <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
                        <span
                            className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
                    </div>
                    <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
                </div>
                {/* // ? Paragraphs */}

                <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
                    <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
                        <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
                Hello! I&apos;m a self-taught JavaScript developer with over five years of experience in frontend development,
                specializing in <span className="text-AAsecondary">Angular</span> and <span
                  className="text-AAsecondary">React</span>.
              </span>
                        </div>
                        <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Known for my friendly and creative approach to programming,
                  I strive to deliver high-quality work with a touch of innovation.
                  I&apos;m constantly fueled by my eagerness to learn and keep up with the latest trends and technologies in the ever-evolving tech landscape.
              </span>
                        </div>
                        <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                I&apos;m excited to embark on new coding adventures, and I&apos;m always open to new challenges that push me to expand my skill set. Let&apos;s connect and create something amazing together!
              </span>
                        </div>

                        <div className="font-Header tracking-wide">
                            <span className="text-gray-400  ">Here are a few technologies I&apos;ve been working with recently:</span>
                        </div>
                        <div className="font-Header tracking-wide flex flex-row space-x-16">
                            <div className="flex flex-row space-x-2 items-center">
                                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                                    {technologies[0].map((tech, index) => {
                                        return (
                                            <div key={index} className="flex flex-row items-center space-x-2">
                                                <ArrowIcon className={"h-3 w-3 text-AAsecondary"}/>
                                                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                                    {technologies[1].map((tech, index) => {
                                        return (
                                            <div key={index} className="flex flex-row items-center space-x-2">
                                                <ArrowIcon className={"h-3 w-3 text-AAsecondary"}/>
                                                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // ? Image in Desktop and Tablet */}
                    <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
                        <div
                            className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
                        ></div>

                        <div className="absolute w-5/6 h-5/5  rounded overflow-hidden">
                            <div
                                className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
                            <Image src={"/img/profile-pic.jpg"} width={500} height={500}
                                   className={"object-cover rounded-lg"} alt="My Image Not Found"/>
                        </div>
                    </div>
                    {/* // ?Image in Mobile */}
                    <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
                        <div
                            className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
                        <div className="absolute w-48 h-full rounded overflow-hidden">
                            <Image width={500} height={500} src={"/img/profile-pic.jpg"}
                                   className={"object-contain rounded-lg"} alt="My Image Not Found"/>
                        </div>
                        <div className="absolute w-48 h-full  bg-AAsecondary opacity-60  rounded overflow-hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
