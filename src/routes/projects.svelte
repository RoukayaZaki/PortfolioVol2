<script lang="ts">
	import ProjectItem from './ProjectItem.svelte';
    import cv from './../lib/RoukayaMohammed.pdf'
	const projects = [
		{
			link: 'https://github.com/InnoSWP/BS21-08-CV-Parser',
			img: './../lib/images/project-img1.png',
			alt: 'Project 1',
			title: 'CV Parser',
			description: 'A web application to parse CVs and extract info.'
		},
		{
			link: 'https://github.com/RoukayaZaki/ChuckJokes',
			img: './../../static/project-img2.png',
			alt: 'Project 2',
			title: 'Chuck Norris',
			description: "A flutter application displaying Chuck Norris' jokes."
		},
		{
			link: 'https://github.com/MostafaKhaled2017/Flutter_Course_iExtract',
			img: './../../static/project-img3.png',
			alt: 'Project 3',
			title: 'Fix My English',
			description: 'A flutter application to highlight writing style mistakes.'
		},
		{
			link: 'https://github.com/RoukayaZaki/Accompaniment-Generation',
			img: './../../static/project-img4.jpg',
			alt: 'Project 4',
			title: 'Accompaniment Generation',
			description: 'An evolutionary algorithm to generate accompaniment to a given melody.'
		}
	];
</script>

<section id="projects">
	<h3>My Projects</h3>
	<ul class="project-list">
		{#each projects as project}
			<ProjectItem {project} />
		{/each}
	</ul>
	<p class="projects-paragraph">
		If you want to know more, please feel free to go through my resume.
	</p>
	<a href={cv} download class="install-button">Resume</a>
</section>

<style>
	#projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	.projects-paragraph {
		max-width: 1250px;
		text-align: justify;
	}

	.project-list {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
