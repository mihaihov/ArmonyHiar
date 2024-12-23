import React from 'react'
import { teamMembers, testimonials } from '../../constants';
import { styles } from '../../style';
import FooterNavbar from '../FooterNavbar/FooterNavbar';
import { logoWhite } from '../../assets';


const TeamMember = ({ name, src, link }) => {
    return (
        <div className="flex flex-col bg-white rounded-xl items-center py-4 my-4 shadow-white shadow-md ">
            <img src={src} className={`rounded-full w-[350px] h-[350px] object-cover ${name === 'Alexandru' || name === 'George' || name === 'Vasi' ? 'object-top' : 'object-bottom'}`} />
            <h1 className='mt-16 text-3xl tracking-wide font-poppins'>{name}</h1>
            <div>
                <button className={`${styles.buttonTertiary}`}><a href={link} target='_blank'>Fa o programare</a></button>
            </div>
        </div>
    )
}

const TeamPage = () => {
    return (
        <div className='bg-[#313638] md:h-full flex flex-col'>
            <div className="flex flex-col w-full items-center pt-8 mb-12 mx-4 md:mx-0">
                <img src={logoWhite} className='w-[250px]' />
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-4 place-content-center gap-4 mx-2">
                {teamMembers
                    .map((teamMember, index) => (
                        <TeamMember key={teamMember.id} name={teamMember.name} src={teamMember.src} link={teamMember.link} />
                    ))}
            </div>

            <div className="mt-20">
                <FooterNavbar />
            </div>
        </div>
    )
}

export default TeamPage