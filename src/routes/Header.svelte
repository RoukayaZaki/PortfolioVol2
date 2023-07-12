<script>
</script>

<header>
	<nav>
		<ul>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/#bio">Bio</a></li>
			<li><a href="{base}/#quote">Quote</a></li>
			<li><a href="{base}/Comic">Comic</a></li>
			<li><a href="{base}/#contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		align-items: center;
		justify-content: center;
		color: #182036;
		background-color: rgba(240, 217, 249, 0.4);
		padding: 10px;
		border-radius: 20px;
		position: fixed;
		top: 0;
		z-index: 999;
		position: fixed;
	}

	nav ul {
		list-style-type: none;
	}

	nav ul li {
		display: inline-block;
		margin-right: 10px;
	}

	nav ul li a {
		color: #182036;
		text-decoration: none;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
