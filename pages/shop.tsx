import Navbar from '../components/navbar';
import Head from 'next/head';

const Shop = () => {
	return (
		<>
			<Head>
				<title>MusaByte</title>
				<link rel='icon' href='/mb_icon.png' />
			</Head>
			<section>
				<Navbar shop={true} />
				<h1>Shop page</h1>
			</section>
		</>
	);
};

export default Shop;
