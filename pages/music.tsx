import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import PageHead from '../components/head';
import SongBoard from '../components/song_board';

const Music = () => {

	return (
		<>
			<PageHead/>
			<Navbar music={true} />
			<section className='music-page'>
				<Banner
					showBanner={false}
					text={"New clothing release! Go to the"}
					linkTo={'/shop'}
					linkText={'MusaByte Shop'}
					addBang={false}
				/>
				<section className='songs-board'>
					<SongBoard />
				</section>
			</section>
		</>
	);
};

export default Music;
