<!-- Comic.svelte -->
<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	import { onMount } from 'svelte';
	interface Comic {
		month: string;
		num: number;
		link: string;
		year: string;
		news: string;
		safe_title: string;
		transcript: string;
		alt: string;
		img: string;
		title: string;
		day: string;
	}

	let comicImage = 'assets/No-Image-Placeholder.svg';
	let comicTitle = '';
	let comicDate = '';

	onMount(async () => {
		try {
			const response = await fetch(
				'https://fwd.innopolis.university/api/hw2?email=r.mohammed@innopolis.university'
			);
			const data = await response.text();
			const comicId: number = parseInt(data.trim(), 10);

			const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
			const comic: Comic = await comicResponse.json();

			const releaseDate = new Date(
				parseInt(comic.year, 10),
				parseInt(comic.month, 10) - 1,
				parseInt(comic.day, 10)
			);

			comicImage = comic.img || 'assets/No-Image-Placeholder.svg';
			comicTitle = comic.safe_title;

			const timeAgo = formatDistanceToNow(releaseDate);
			comicDate = `Released ${timeAgo} ago`;
		} catch (error) {
			console.log('Error fetching comic:', error);
		}
	});
</script>

<body>
	<main>
		<h2>Comic</h2>
		<img id="xkcd-comic-image" src={comicImage} alt="" />
		<p id="xkcd-comic-title">{comicTitle}</p>
		<p id="xkcd-comic-date">{comicDate}</p>
	</main>
</body>

<style>
	h2,
	p {
		margin: 0;
		padding: 0;
	}
	p {
		max-width: 450px;
		text-align: justify;
	}
	main {
		background-image: none;
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
		align-items: center;
		justify-content: flex-start;

		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		font-variant: small-caps;

		line-height: 1.6;
		background-color: #182036;
		color: #f0d9f9;
		background-repeat: no-repeat;
		background-size: 1900px 950px;
		background-position: center top;
	}

	main {
		margin-top: 25px;
		padding: 20px;
	}

	h2 {
		margin-bottom: 10px;
	}
</style>
