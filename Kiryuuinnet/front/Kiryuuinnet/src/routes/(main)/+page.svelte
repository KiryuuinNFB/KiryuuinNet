<script>
	let sitetitle = "KiryuuinNet";
	import Heading from "../head.svelte"
</script>

<Heading bind:SiteHead={sitetitle}/>

<body>
    <div class="content">
        <h1 class="bigtopic">Welcome to my site</h1>
		<div class="imagecontainer">
				<img src="/assets/channel.png" alt="Kiryuuin /NFB Production" class="image">
			</div>
		<div class="walloftext">
			<p>
				Hi I'm Kiryuuin. You might know me from the remixes I posted on my <a href="https://www.youtube.com/@KiryuuinNFB" class="walloftextlink" target="_blank">Youtube channel</a>.
				I have been making music since grade 6 and I think I'm somewhat good at it. I usually do morlum, eurobeat, J-Pop and other genres I like listening to. You can commission me at the <a href="/commission" class="walloftextlink">commission page</a>.
				I'm also interested in programming, especially web development. although I'm not good at it, I am always looking for improvement. I also made <a href="https://github.com/KiryuuinNFB/Kafkarchive" class="walloftextlink" target="_blank">Kafkarchive</a>.
				A rough character build calculator and database for Honkai: Star Rail. 
			</p>
		</div>
		<div class="quote">
			<p class="walloftext">
				"Svelte is the eco friendly wood veneer and SvelteKit is the galvanized square steel and screws borrowed from aunt"
				- Kiryuuin
			</p>
		</div>
    </div>
	<div class="emptyspace"></div>
</body>