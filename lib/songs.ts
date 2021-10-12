export interface CommentType {
	username: string;
	title: string;
	body: string;
	date: Date;
}

export interface SongObjType {
	id: string;
	title: string;
	url: string;
	tags: string[];
	cover: string;
	comments: CommentType[];
}

export const getAllSongs = (): SongObjType[] => ([
	{
		id: '1',
		title: 'Electric',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/Electric+wav.wav',
		tags: ['musabyte', 'electric'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/3.jpg',
		comments: [],
	},
	{
		id: '2',
		title: 'Future Bass',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/FutureBass+95bpm.wav',
		tags: ['musabyte', 'future', 'bass'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/1.jpg',
		comments: [],
	},
	{
		id: '3',
		title: 'Rising',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/How+Do+You+Feel+wo+Me+Ebmin+116bpm.wav',
		tags: ['musabyte', 'rising'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/1.jpg',
		comments: [],
	},
	{
		id: '4',
		title: 'No Show',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/NoShow.wav',
		tags: ['musabyte', 'no', 'show'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/7.jpg',
		comments: [],
	},
	{
		id: '5',
		title: 'Rockverse',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/Rockverse.wav',
		tags: ['musabyte', 'rockverse'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/1.jpg',
		comments: [],
	},
	{
		id: '6',
		title: 'Strings and Pads',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/Strings+and+Pads+96bpm+Aminor.wav',
		tags: ['musabyte', 'strings', 'and', 'pads'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/2.jpg',
		comments: [],
	},
	{
		id: '7',
		title: 'Stutter',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/Stuttter.wav',
		tags: ['musabyte', 'stutter'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/3.jpg',
		comments: [],
	},
	{
		id: '8',
		title: 'Swedish House',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/SwedishHouse.wav',
		tags: ['musabyte', 'swedish', 'house'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/3.jpg',
		comments: [],
	},
	{
		id: '9',
		title: 'Synga',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/Synga.wav',
		tags: ['musabyte', 'synga'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/7.jpg',
		comments: [],
	},
	{
		id: '10',
		title: 'Tron Wave',
		url: 'https://musabyte-audio-files.s3.amazonaws.com/TronWave.wav',
		tags: ['musabyte', 'tron', 'wave'],
		cover: 'https://active-storage-big-time-sound-seeds.s3.amazonaws.com/3.jpg',
		comments: [],
	},
]);
