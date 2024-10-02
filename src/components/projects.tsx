"use client"
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import ProjectCard from "@/components/project-card";
import {useSectionInView} from "@/lib/useInView";

export  default function Projects(){
    const {refCallBack} = useSectionInView("#projects",0.1);

    return(
        <section ref={refCallBack} id={"projects"} className={'scroll-mt-28 mb-28'}>
            <SectionHeading>

                My Projects
            </SectionHeading>
            <div>
                {
                    projectsData.map((project, index)=>(
                      <ProjectCard {...project} key={index}/>
                    ))
                }
            </div>
        </section>
    )
}