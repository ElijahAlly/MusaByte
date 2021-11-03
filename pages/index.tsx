import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import PageHead from '../components/head';
import SiteUnderDevelopment from '../components/site_under_development';
import SocialsBanner from '../components/socials_banner';

const Home: NextPage = () => {
	return (
		<>
			<PageHead />
			<Navbar />
			<section className='home-page'>
				<Banner
					showBanner={true}
					text={"Check out MusaByte's"}
					linkTo={'/music'}
					linkText={'New Music'}
					addBang={true}
				/>
				<SiteUnderDevelopment />
				{/* <SocialsBanner /> */}
				{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
			</section>
		</>
	);
};

export default Home;
