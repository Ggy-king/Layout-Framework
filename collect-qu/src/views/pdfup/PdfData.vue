<template>
    <div class="pdf_container">
        <PdfUp />
    </div>
</template>
<script>
import PdfUp from '../pdfup/PdfUp.vue';
export default {
    name: "PdfData",
    components: { PdfUp }
}
</script>

<style lang="scss">
.pdf_container {
    position: absolute;
    top: 100px;
    left: 10px;
    padding: 10px;
    height: 870px;
}
</style>