import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
    const contactMethods = [
        {
            icon: faPhone,
            contact: "+1 (626) 283-1812",
            title: "Phone",
            link: "tel:+1-626-283-1812",
        },
        {
            icon: faEnvelope,
            contact: "maxwellwijaya00@gmail.com",
            title: "Email",
            link: "mailto:maxwellwijaya00@gmail.com",
        },
        {
            icon: faLinkedin,
            contact: "Maxwell Wijaya",
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/maxwell-wijaya-9b9273266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
    ]

    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8 mt-20">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-orange-400 font-semibold">
                        Contact
                    </h3>
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Let me know if you have an internship position!
                    </p>
                    <p>
                        I am interested in getting an internship for completely free. I am solely interested to get the experience and work ethic that comes with being part of a larger company.
                    </p>
                </div>
                <div>
                    <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx}>
                                    <h4 className="text-white text-lg font-medium">{item.title}</h4>
                                    <div className="mt-3 flex items-center gap-x-3">
                                        <div className="flex-none text-white">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <a href={item.link} target='_blank'>{item.contact}</a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Contact