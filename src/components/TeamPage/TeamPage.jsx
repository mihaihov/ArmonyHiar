import React from 'react'
import { logoBlack, tomaMadalin } from '../../assets';
import { teamMembers, testimonials } from '../../constants';
import { styles } from '../../style';
import FooterNavbar from '../FooterNavbar/FooterNavbar';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoWhite } from '../../assets';


const TeamMember = ({ name, instagramProfile, twitterProfile, facebookProfile, src }) => {
    return (
        <div className="flex flex-col bg-white w-[400px] rounded-xl items-center py-4 my-4 shadow-white shadow-md ">
            <img src={src} className={`rounded-full w-[350px] h-[350px] object-cover ${name === 'Alexandru' ? 'object-top' : 'object-bottom'}`} />
            <h1 className='mt-16 text-3xl tracking-wide font-poppins'>{name}</h1>
            <div>
                <button className={`${styles.buttonTertiary}`}>Fa o programare</button>
            </div>
        </div>
    )
}

const TeamPage = () => {
    return (
        <div className='bg-[#313638] md:h-screen'>
            <div className="flex flex-col w-full items-center pt-8">
                <img src={logoWhite} className='w-[250px]' />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                {teamMembers
                    .map((teamMember, index) => (
                        <TeamMember key={teamMember.id} name={teamMember.name} instagramProfile={teamMember.instagramProfile}
                            twitterProfile={teamMember.twitterProfile} facebookProfile={teamMember.facebookProfile} src={teamMember.src} />
                    ))}
            </div>

            <div className="mt-16">
                <FooterNavbar />
            </div>
        </div>
    )
}

export default TeamPage