import React, { useEffect } from 'react';
import { SongObjType } from '../lib/songs';
import { useSharedSongState } from './shared_state';

interface SongBoardProps {
	key: string;
	song: SongObjType;
}

const SongBoard = ({ song }: SongBoardProps) => {
	const { isPlaying, pauseAudio, playSong, togglePlay } = useSharedSongState();

	useEffect(() => {
		return () => {
			pauseAudio();
		};
	}, []);

	return (
		<li className={`song song-id-${song.id}`} id='paused' onClick={() => togglePlay(song)}>
			<img src={song.cover} alt='album picture' className='cover' />
			<h1 className='title'>{song.title}</h1>
		</li>
	);
};

export default SongBoard;
