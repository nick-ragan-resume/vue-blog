<template>
  <div class="spin"></div>
</template>

<script>
export default {
    // nothing to submit
}
</script>

<style>
    .spin {
        display: block;
        width: 40px;
        height: 40px;
        margin: 30px auto;
        border: 3px solid transparent;
        border-radius: 50%;
        border-top-color: #1100ff;
        animation: spin 1.35s ease infinite;
    }

    @keyframes spin {
        to { transform: rotateZ(360deg)}
    }
</style>