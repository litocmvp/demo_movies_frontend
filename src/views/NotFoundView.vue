<template>
    <div class="row justify-content-center">
        <div class="col-6 text-center">
            <img class="img-fluid" src="@/assets/img/04.png" alt="404 Error">
            <h1>Pagína no encontrada</h1>
            <h4 class="text-muted">Error HTTP 404</h4>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotFoudView',
    created() {
        document.title = 'CMVP Movies Demo - Not Found Resource';
    },
}

</script>