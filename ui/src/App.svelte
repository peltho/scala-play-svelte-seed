<script>
	import 'bulma/css/bulma.css'
</script>

<div class="container">
	<div class="tile is-ancestor main-tile">
		<div class="tile is-vertical is-12">
			<div class="tile">

				<div class="tile is-parent is-vertical">
					<article class="tile is-child notification is-primary">
						<p class="title">Front provided by Svelte</p>
						<p class="subtitle">...and designed thanks to Bulma</p>
					</article>
					<article class="tile is-child notification is-warning">
						<p class="title">Back provided by Play</p>
						<p class="subtitle">...and Akka HTTP under the hood</p>
					</article>
				</div>

				<div class="tile is-parent">
					<article class="tile is-child notification is-info">
						<p class="title">Implement your own stuff!</p>
					</article>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.main-tile {
		margin-top: 20px !important;
	}
</style>
