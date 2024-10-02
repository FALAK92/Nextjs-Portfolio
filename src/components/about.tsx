"use client"

import SectionHeading from "@/components/section-heading";
import Image from 'next/image';
import {useSectionInView} from "@/lib/useInView";

//Animation
import {motion} from "framer-motion";
import {Fade} from "react-awesome-reveal";

export default function About() {
    const {refCallback} = useSectionInView("#about");
    return (
        <motion.section
            ref={refCallback}
            id={'about'}
            className={'max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28'}
        >
            <div className={'container mx-auto'}>
                <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <SectionHeading>
                        About Me
                    </SectionHeading>
                </Fade>

                <div className={'grid xl:grid-cols-2 lg:text-start'}>
                    <div className={'flex-1'}>
                        <div className={'text-lg mt-12 xl:mt-3'}>
                            <div className={'flex justify-start flex-col'}>
                                <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                    <h3 className={'font-bold mt-6'}>Our Mission</h3>
                                </Fade>
                                <Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
                                    <p className={'mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'}>
                                        We believe that a website is the foundation of a successful online presence, and
                                        our
                                        goal is to help businesses establish a strong digital presence. Our process
                                        begins
                                        with understanding your business goals.
                                    </p>
                                </Fade>
                                <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                    <h3 className={'font-bold mt-6'}>Our Vision</h3>
                                </Fade>
                                <Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
                                    <p className={'mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'}>
                                        We believe that a website is the foundation of a successful online presence, and
                                        our
                                        goal is to help businesses establish a strong digital presence. Our process
                                        begins
                                        with understanding your business goals.
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    {/* Right Image   */}
                    <Image
                        src={"/girl_2.png"}
                        alt={'About Me'}
                        width={'300'}
                        height={'300'}
                        quality={'100'}
                        priority={true}
                        className={'rounded-full mt-8 object-cover'}
                    />
                </div>
            </div>
        </motion.section>
    )
}
