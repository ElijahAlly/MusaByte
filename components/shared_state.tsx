import React, { useState } from 'react';
import { useBetween } from 'use-between';
import { SongObjType } from '../lib/songs';

// Custom hook with shared state
const useSongState = () => {
	const [song, setSong] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [audio] = useState(typeof Audio !== 'undefined' && new Audio());

	const pauseAudio = () => {
		audio.pause();
		const playingLi = document.getElementById('playing');
		if (playingLi) playingLi.id = 'paused';
		setIsPlaying(false)
	};

	const playSong = (song: SongObjType) => {
		setSong(song);
		setIsPlaying(true);

		if (audio.src !== song.url) audio.src = song.url;
		audio.play();
		audio.addEventListener("ended", () => {
			setIsPlaying(false);
		});
	};

	const togglePlay = (song: SongObjType) => {
		const li = document.getElementsByClassName(`song-id-${song.id}`)[0];

		if (li.id === 'paused') {
			if (isPlaying) {
				pauseAudio();
			}

			playSong(song);
			li.id = 'playing';
		} else {
			pauseAudio();
			li.id = 'paused';
		}
	};

	return {
		togglePlay,
		playSong,
		pauseAudio,
		audio,
		song,
		setSong,
		isPlaying,
		setIsPlaying,
	};
};

// Custom hook for sharing state between any components
export const useSharedSongState = () => useBetween(useSongState);
