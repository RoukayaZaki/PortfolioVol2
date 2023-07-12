<script lang="ts">
</script>

<svelte:head>
	<title>Bio</title>
	<meta name="Bio" content="Roukaya's Bio" />
</svelte:head>

<section id="bio">
	<h2>Biography</h2>
	<div class="project">
		<p class="projects-paragraph">
			I am now studying a Computer Science degree at Innopolis University while immersing myself in
			the field of software development. I study programming languages, algorithms, and software
			development in an effort to increase my understanding and sharpen my skills. The program's
			focus on practical learning has given me plenty of chances to work on a range of projects.
			These projects have provided valuable insights into the software development lifecycle, and I
			am excited to leverage this knowledge to contribute to innovative solutions. I am eager to
			take on new challenges, learn from experienced mentors, and continue growing as a software
			developer.
		</p>
	</div>
</section>

<style>
	#bio {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		padding-top: 60px;
		border-radius: 20px;
		width: 1600px;
		color: #f0d9f9;
		margin-top: 90px;
	}

	.projects-paragraph {
		max-width: 1250px;
		text-align: justify;
	}
</style>
