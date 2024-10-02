"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";
import {Mail} from "lucide-react";

// Animations
import {Fade} from "react-awesome-reveal";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/useInView";
import {useActiveSectionContext} from "@/containers/active-section";

export default function Intro() {
    const {ref} = useSectionInView("#home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <section className={'mb-28 max-w-[75rem] text-center sm:mb-0'} id={"home"} ref={ref}>
            <div className={'flex items-center justify-center'}>
                <div className={'relative'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            damping: 10,
                            duration: 0.2,
                        }}
                    >
                        <Image
                            alt={'portrait'}
                            src={'/girl_1.png'}
                            width={'480'}
                            height={'480'}
                            quality={'100'}
                            priority={true}
                            className={'rounded-full shadow-xl object-cover w-[480px] h-[480px]'}
                        />
                        <motion.span
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                type: "spring",
                                stiffness: 125,
                                damping: 10,
                                duration: 0.2
                            }}
                            className={'text-6xl absolute bottom-8 right-12'}>
                            👋
                        </motion.span>
                    </motion.div>
                </div>
            </div>
            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                <h1 className={'mb-10 mt-4 px-4 text-2xl sm:text-4xl'}>
                    <span className={'font-medium !leading-[1.5]'}>Step into the future of your business with a revamped website.</span>{""}
                    <p className={'text-[14px]'}>
                    Frontend builds immersive digital experiences and innovative products with a creative touch.

                    </p>
                </h1>
            </Fade>
            <motion.div
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
                className={'flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'}>
                <Link href={"mailto:naaz92falak@gmail.com"}
                      className={"group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"}>
                    Connect <Mail color={"#9ca3af"}/>
                </Link>

                <a href="https://www.linkedin.com/in/falak-naaz-447371262" target="_black" className={"bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"}>
                    <BsLinkedin/>
                </a>
                <a href="https://github.com/FALAK92" target="_black" className={"bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"}>
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}