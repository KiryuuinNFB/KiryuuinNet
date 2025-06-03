<script>
    let sitetitle = page.status + " " + page.error?.message;
    import { page } from "$app/state";

</script>

<title>{sitetitle}</title>

<div class="content">
    <h1 class="topic">{page.status}</h1>
    <h1 class="topic">{page.error?.message}</h1>
    <a href="/" class="walloftextlink">Return to home page</a>
</div>
