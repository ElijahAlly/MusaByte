import type { NextPage } from 'next';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
	return (
		<>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</head>
			<Navbar />
		</>
	);
};

export default Home;
