import React from 'react';
import { useSharedSongState } from './shared_state';
import Image from 'next/image'

const CurrentlyPlayingSong = () => {
	const { song, isPlaying, playSong, pauseAudio, togglePlay } = useSharedSongState();

	return (
		<section className='currently-playing-song'>
			{song ? (
				<>
					<div className='cover-container'>
						<Image src={song.cover} className='cover' alt='song cover art' />
					</div>
					<h1 className='title'>{song.title}</h1>
				</>
			) : (
				<>
					<div className='cover-container'>
						<Image
							src='https://musabyte-audio-files.s3.amazonaws.com/no_album_art__no_cover.jpg'
							className='cover'
							alt='song cover art placeholder'
						/>
					</div>
					<h1 className='title'>Select A Song</h1>
				</>
			)}
			<div className='song-controls'>
				{isPlaying ? (
					<svg
						onClick={() => togglePlay(song)}
						role='img'
						height='40'
						width='40'
						viewBox='0 0 16 16'
						fill='currentColor'>
						<path fill='none' d='M0 0h16v16H0z'></path>
						<path d='M3 2h3v12H3zm7 0h3v12h-3z'></path>
					</svg>
				) : (
					<svg
						onClick={song ? () => togglePlay(song) : () => alert('Select a song to play!')}
						role='img'
						height='40'
						width='40'
						viewBox='0 0 16 16'
						fill='currentColor'>
						<path d='M4.018 14L14.41 8 4.018 2z'></path>
					</svg>
				)}
			</div>
		</section>
	);
};

export default CurrentlyPlayingSong;
