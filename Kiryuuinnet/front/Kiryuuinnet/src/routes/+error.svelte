<script>
    let sitetitle = page.status + " " + page.error?.message;
    import { page } from "$app/state";

</script>

<title>{sitetitle}</title>

<div class="content">
    <h1 class="bigtopic">{page.status}</h1>
    <h1 class="bigtopic">{page.error?.message}</h1>
</div>
