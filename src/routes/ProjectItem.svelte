<script lang="ts">
	export let project: {
		link: string; // link to the github repo
		img: string; // image relative path
		alt: string;
		title: string; // title of the project
		description: string; // description of the project
	};
   
</script>
<li class="project-item">
	<a href={project.link}>
		<div class="project-image">
			<img src={project.img} alt={project.alt} />
			<div class="project-details">
				<h3>{project.title}</h3>
				<p class="description">{project.description}</p>
			</div>
		</div>
	</a>
</li>
<style>

	.project-item {
		width: 300px;
		height: 300px;
	}

	.project-image {
		position: relative;
		height: 200px;
	}

	.project-image img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		object-fit: cover;
		display: block;
	}

	.project-details {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 0;
		background-color: rgba(255, 255, 255, 0.6);
		color: #182036;
		border-radius: 10px;
		transition: opacity 0.3s ease;
	}

	.project-item:hover .project-details {
		opacity: 1;
	}

	.description {
		padding: 5px;
	}

</style>
