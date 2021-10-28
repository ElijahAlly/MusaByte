import Link from 'next/link'
import Image from 'next/image'

interface SocialObject {
    name: string;
    link: string;
    icon: string;
}
 
const SocialsBanner = () => {
    const socials: SocialObject[] = [
        {
            name: 'YouTube',
            link: 'https://www.youtube.com/channel/UC4li0Q3AvEdo58ALeazbJng',
            icon: 'youtube.png'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/musabyte_official/',
            icon: 'instagram.png'
        },
        {
            name: 'Twitter',
            link: 'https://www.twitter.com/MusaByte',
            icon: 'twitter.png'
        },
        {
            name: 'TikTok',
            link: 'https://www.tiktok.com/@musabyte_official',
            icon: 'tik-tok.png'
        },
    ];

    return ( 
        <section className='socials-banner'>
            {socials.map((social, i) => (
                <a key={i} href={social.link} target='_blank' rel="noreferrer" className='social'>
                    <Image src={`/${social.icon}`} width='40' height='40' className='icon'/>
                    <h2 className='name'>{social.name}</h2>
                </a>
            ))}
        </section>
    );
}

export default SocialsBanner;