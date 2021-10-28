import Link from 'next/link'

const SiteUnderDevelopment = () => {
    return (  
        <section className='under-development'>
            <h2 className='welcome-message'>Welcome! I am currently working on building out more features for this website. In the meantime, check out my music <Link href='/music'><a className='music-link'>here</a></Link>. Also visit any of my socials for more frequent updates! Thanks for listening! - MusaByte</h2>
        </section>
    );
}
 
export default SiteUnderDevelopment;