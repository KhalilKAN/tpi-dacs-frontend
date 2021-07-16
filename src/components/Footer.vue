<template>
    <footer>
        <div class="footer-content">
            <img src="../assets/img/logo_argentina_unida-blanco.svg">
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    
    footer{
        position: absolute;
        bottom: 0;
        left: 0; 
        width: 100%;
        height: 152px;
        background-color: #37bbed;
    }

    .footer-content{
        max-width: 1200px;
        width: 100%;   
        margin: 0 auto;
    }
    footer img{
        position: relative;
        top: 35px;
        width: 288px;
        margin-left: 25px;  
    }
</style>