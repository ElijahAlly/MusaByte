import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Banner from '../components/banner';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>MusaByte</title>
				<link rel='icon' href='/mb_icon.png' />
			</Head>
			<Navbar />
			<section className='home-page'>
				<Banner
					showBanner={true}
					text={"It's finally out! Check out MusaByte's"}
					linkTo={'/music'}
					linkText={'New Music'}
					addBang={true}
				/>
			</section>
		</>
	);
};

export default Home;
