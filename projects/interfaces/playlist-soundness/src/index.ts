export interface SongList {
	artists: Artists;
	songs: string[];
	time: number;
}

export interface Artists {
	[name: string]: string[];
}

export type Submissions = (Song | Album | Playlist)[];

export interface Song {
	artist: string[] | string;
	name: string;
	length: number;
	type: "song";
}

export interface Album {
	type: "album";
	songs: Song[];
}

export interface Playlist {
	type: "playlist";
	resolve: () => Song[];
}

export function unrollPlaylist(submissions: Submissions) {
	let songList: SongList = {
		artists: {},
		songs: [],
		time: 0,
	};

	const addSong = (song: Song) => {
		let artists;
		if (typeof song.artist === "string") {
			artists = [song.artist];
		} else {
			artists = song.artist;
		}
		for (const artist of artists) {
			if (!(artist in songList.artists)) {
				songList.artists[artist] = [];
			}
			songList.artists[artist].push(song.name);
		}
		songList.songs.push(song.name);
		songList.time += song.length;
	};

	for (const submission of submissions) {
		switch (submission.type) {
			case "song":
				addSong(submission);
				break;
			case "album":
				for (const song of submission.songs) {
					addSong(song);
				}
				break;
			case "playlist":
				const songs = submission.resolve();
				for (const song of songs) {
					addSong(song);
				}
				break;
		}
	}

	return songList;
}
