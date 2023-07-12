<script>
	import profilePic from './../lib/images/profile.jpg';
	import leftQuote from './../lib/images/left-quotes-sign.png';
	import Projects from './projects.svelte';
	import Bio from './bio.svelte';
	import Contact from './Contact.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<section id="home">
	<div class="portrait-container">
		<img src={profilePic} alt="My Portrait" />
	</div>
	<h1>Hello, I'm Roukaya</h1>
	<p>
		I am a student at Innopolis University pursuing a degree in Computer Science. I have a keen
		interest in the world of technology and am constantly exploring its various facets.
	</p>
</section>
<Bio />
<Projects />
<section id="quote">
	<img src={leftQuote} alt="Quotation Marks" />
	<p>
		You are too concerned about what was and what will be. There is a saying: Yesterday is history,
		tomorrow is a mystery, but today is a gift.
	</p>
	<p>That's why they call it the present.</p>
	<h3>-Master Oogway</h3>
</section>
<Contact />

<style>
	#home {
		background-color: rgba(240, 217, 249, 0.4);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-height: 80vh;
		padding-top: 60px;
		border-radius: 20px;
		height: 400px;
		width: 1600px;
		color: #20174b;
		margin-bottom: 80px;
		margin-top: 50px;
	}

	.portrait-container {
		width: 400px;
		height: 400px;
		overflow: hidden;
		border-radius: 50%;
		margin-bottom: 20px;
		animation: portrait-move 2s infinite alternate;
	}

	.portrait-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@keyframes portrait-move {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
