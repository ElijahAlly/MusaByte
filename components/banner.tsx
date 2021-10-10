import Link from 'next/link';

const Banner = ({
	showBanner,
	text,
	linkText,
	linkTo,
	addBang,
}: {
	showBanner: Boolean;
	text: string;
	linkTo: string;
	linkText: string;
	addBang: Boolean;
}) => {
	return (
		<>
			{showBanner ? (
				<section className='banner'>
					<h2 className='text'>
						{text}{' '}
						<Link href={linkTo}>
							<a>{linkText}</a>
						</Link>
						{addBang ? <>!</> : <>.</>}
					</h2>
				</section>
			) : (
				<></>
			)}
		</>
	);
};

export default Banner;
