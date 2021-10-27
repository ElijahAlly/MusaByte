import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import PageHead from '../components/head';

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
			</section>
		</>
	);
};

export default Home;
