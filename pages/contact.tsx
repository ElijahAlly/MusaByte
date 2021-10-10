import Navbar from '../components/navbar';
import Head from 'next/head';

const Contact = () => {
	return (
		<>
			<Head>
				<title>MusaByte</title>
				<link rel='icon' href='/mb_icon.png' />
			</Head>
			<section>
				<Navbar contact={true} />
				<h1>Contact page</h1>
			</section>
		</>
	);
};

export default Contact;
