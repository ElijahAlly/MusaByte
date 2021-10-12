import PageHead from '../components/head';
import Navbar from '../components/navbar';


const Shop = () => {
	return (
		<>
			<PageHead />
			<section>
				<Navbar shop={true} />
				<h1>Shop page</h1>
			</section>
		</>
	);
};

export default Shop;
