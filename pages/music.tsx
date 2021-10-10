import { getAllSongs, SongObjType } from '../lib/songs';
import React from 'react';
import SongBoard from '../components/song_board';
import Navbar from '../components/navbar';
import SongToolbar from '../components/song_toolbar';
import CurrentlyPlayingSong from '../components/currently_playing_song';
import Comments from '../components/comments';
import Head from 'next/head';
import Banner from '../components/banner';

const Music = () => {
	const songs = getAllSongs();

	return (
		<>
			<Head>
				<title>MusaByte</title>
				<link rel='icon' href='/mb_icon.png' />
			</Head>
			<Navbar music={true} />
			<section className='music-page'>
				<Banner
					showBanner={true}
					text={"New clothing release! Go to the"}
					linkTo={'/shop'}
					linkText={'MusaByte Shop'}
					addBang={false}
				/>
				<SongToolbar />
				<section className='songs-board'>
					{songs && (
						<ul className='songs-list'>
							{songs.map((song: SongObjType) => (
								<SongBoard key={song.id} song={song} />
							))}
						</ul>
					)}
					<CurrentlyPlayingSong />
					<Comments />
				</section>
			</section>
		</>
	);
};

export default Music;
