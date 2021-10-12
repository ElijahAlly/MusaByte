import Navbar from '../components/navbar';
import PageHead from '../components/head';

const Contact = () => {
	return (
		<>
			<PageHead/>
			<section>
				<Navbar contact={true} />
				<h1>Contact page</h1>
			</section>
		</>
	);
};

export default Contact;
