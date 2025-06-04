<script>
	let sitetitle = "KiryuuinNet";
	import Heading from "../head.svelte"
</script>

<Heading bind:SiteHead={sitetitle}/>

<body>
    <div class="content">
        <h1 class="bigtopic">Welcome to my site</h1>
		<div class="imagecontainer">
				<img src="https://media.discordapp.net/attachments/645528014691631105/1379522998624850011/image.png?ex=68408c69&is=683f3ae9&hm=04f32d4edf4ec17fb5d91c9cb2265ff4ac7178f4d03baba3645c3567169de0a0&=&format=webp&quality=lossless" alt="Kiryuuin /NFB Production" class="image">
			</div>
		<div class="walloftext">
			<p>
				Hi I'm Kiryuuin. You might know me from the remixes I posted on my <a href="https://www.youtube.com/@KiryuuinNFB" class="walloftextlink" target="_blank">Youtube channel</a>.
				I have been making music since grade 6 and I think I'm somewhat good at it. I usually do morlum, eurobeat, J-Pop and other genres I like listening to. You can commission me at the <a href="/commission" class="walloftextlink">commission page</a>.
				I'm also interested in programming, especially web development. although I'm not good at it, I am always looking for improvement. I also made <a href="https://github.com/KiryuuinNFB/Kafkarchive" class="walloftextlink" target="_blank">Kafkarchive</a>.
				A rough character build calculator and database for Honkai: Star Rail. 
			</p>
		</div>
    </div>
</body>