import React, { useEffect, useState } from 'react';

const SongBoard = () => {
	const videoIds = [
		['st1hqm3kg6Y', 'Taking Off'],
		['Pm7E-dH8eAA', 'Shedding Emotions'],
		['WbzEoFr-yy0', 'Future Bass'],
		['ziYcEuvSIKc', 'Swedish House'],
		['i_Xpz_cR6M0', 'Stutter'],
		['aFv5J-iOzJ0', 'Electric'],
		['fxgv0f4QQo0', 'Light Years Away'],
		['lSYUiEOEtI8', 'Synga'],
		['pTnj1cSZO6I', 'Tron Wave'],
		['ROyMgzE-urE', 'Pads & Strings'],
	];
	const [currentVideo, setCurrentVideo] = useState(videoIds[0]);
	console.log(currentVideo)

	const changeCurrentVideo = (video: any) => {
		const prevVideo = document.getElementsByClassName('selected-video')[0];
		if (prevVideo) prevVideo.classList.remove('selected-video');

		const videoEle = document.getElementById(`video-${video[0]}`);
		videoEle.classList.add('selected-video');

		setCurrentVideo(video);
	};

	useEffect(() => {
		changeCurrentVideo(currentVideo);
	}, [])

	return (
		<section className='songs-board'>
			<div className='video-list'>
				{videoIds.map((video) => (
					<div id={`video-${video[0]}`} className='video-name' key={video[0]} onClick={() => changeCurrentVideo(video)}>
						{video[1]}
					</div>
				))}
			</div>
			<iframe
				className='youtube-player'
				width='640'
				height='385'
				src={`https://www.youtube.com/embed/${currentVideo[0]}`}></iframe>
		</section>
	);
};

export default SongBoard;
