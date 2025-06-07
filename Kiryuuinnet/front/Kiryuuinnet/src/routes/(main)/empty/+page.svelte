<script lang="ts">
	import { onMount } from "svelte";

	let data, res;

	let sitetitle = "Empty | KiryuuinNet";
	import Heading from "../../head.svelte"
	

	onMount(async () => {
		const response = await fetch('http://localhost:3000/')
		const data = await response.json();

		res = data.msg
	});
</script>

<Heading bind:SiteHead={sitetitle}/>

<body>
	<div class="content">
		<h1 class="topic">Empty page</h1>
        <p class="walloftext">This is a template page lmao how did you find this</p>
		<p class="walloftext"> {data} </p>

	</div>
</body>