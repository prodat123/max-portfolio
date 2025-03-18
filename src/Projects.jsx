import { icon } from '@fortawesome/fontawesome-svg-core'
import { faCss, faCss3, faHtml5, faJava, faJs, faPython, faReact, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faDrawPolygon, faFaceSmile, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Projects() {
    const projects = [
        {name: 'Relife Habits', link: 'https://relifehabits.com', description: 'A website that gamifies daily habits, reaching 2000 user sign ups in 2 months.', imageUrl: '/assets/relife-image.png', skills: [
            {name: 'ReactJS', icon: faReact},
            {name: 'HTML', icon: faHtml5},
            {name: 'CSS', icon: faCss3},
            {name: 'Javascript', icon: faJs},
        ]},
        {name: 'Prodatweb', link: 'https://prodatweb.com', description: 'A social media platform for students to join spaces and share posts.', imageUrl: '/assets/prodat-image.png', skills: [
            {name: 'ReactJS', icon: faReact},
            {name: 'HTML', icon: faHtml5},
            {name: 'CSS', icon: faCss3},
            {name: 'MySQL', icon: faDatabase},
            {name: 'Firebase', icon: faFire},
            {name: 'Javascript', icon: faJs},
        ]},
        {name: 'Study Ascension', link: 'https://studyascension.online', description:"A site that generates questions based on user input using the Meta Llama API and stores those questions as worksheets and notes for students to study.", imageUrl: '/assets/study-ascension-image.png', skills: [
            {name: 'ReactJS', icon: faReact},
            {name: 'HTML', icon: faHtml5},
            {name: 'CSS', icon: faCss3},
            {name: 'Youtube API', icon: faYoutube},
            {name: 'Hugging Face', icon: faFaceSmile},
            {name: 'Supabase', icon: faDatabase}
        ]},
        {name: 'Irrigation Planner', link: 'https://lightblue-frog-229996.hostingersite.com', description:"A site that takes user location, applies NASA data as a heatmap, and calculates the optimal water needed to maximize plant growth.", imageUrl: '/assets/irrigation-helper-image.png', skills: [
            {name: 'ReactJS', icon: faReact},
            {name: 'Python', icon: faPython},
            {name: 'HTML', icon: faHtml5},
            {name: 'CSS', icon: faCss3},
            {name: 'Hugging Face', icon: faFaceSmile}
        ]},
        {name: 'Glow +24', link: 'https://glowplus24.com', description:"A commercial site for the Glow Plus company which sells beauty products. This is complete with a backend for company workers.", imageUrl:'/assets/glowplus-image.png', skills: [
            {name: 'ReactJS', icon: faReact},
            {name: 'HTML', icon: faHtml5},
            {name: 'CSS', icon: faCss3},
            {name: 'Firebase', icon: faFire},
            {name: 'Javascript', icon: faJs},
        ]},

        // {name: 'HTML', icon: faHtml5},
        // {name: 'CSS', icon: faCss},
        // {name: 'Javascript', icon: faJava},
        // {name: 'MySQL', icon: faDatabase},
        // {name: 'UI/UX', icon: faDrawPolygon},
        // {name: 'Python', icon: faPython},
    
    ]
    return (
        <div className='p-4'>
            {/* <h1 className='text-3xl font-semibold mb-3 text-center'>My Projects</h1> */}
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                {projects.map(project => (
                    
                    <div className='flex flex-col bg-gray-600 rounded-2xl p-4 text-white'>
                        <img src={project.imageUrl} className='w-full h-56 rounded-2xl object-cover'/>
                        <h1 className='font-semibold text-lg mt-2'>{project.name}</h1>
                        <h3>{project.description}</h3>
                        <p className='font-semibold mt-4'>Tech Stack Used:</p>
                        <div className='flex w-full flex-wrap gap-1'>
                            {project.skills.map((skill) => (
                                <div className='rounded-2xl px-4 bg-gray-700 py-2 flex gap-2 items-center justify-center'>

                                <FontAwesomeIcon icon={skill.icon} />
                                <p className='text-center'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                        <a className='px-4 py-2 rounded-2xl bg-gray-800 text-white mt-2 text-center cursor-pointer hover:bg-gray-700 transition' href={project.link} target='_blank'>View Project</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects