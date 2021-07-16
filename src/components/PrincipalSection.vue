<template>
    <div class="section">
        <!-- <img src="@/assets/img/beneficios_impositivos-min.jpg"> -->
        
        <div class="text-principal">
            <div>
                <h2>Beneficios impositivos</h2>
            </div>
            <div>
                <p>Exenciones impositivas, bonos fiscales, descuentos en tarifas y otros incentivos a la producción.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrincipalSection'
}
</script>
<style lang="postcss" scoped>
    .section{
        @apply flex items-center;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(../assets/img/beneficios_impositivos-min.jpg);
        height: 500px;
        background-size: cover;
        background-position: 70% 30%;
        /* filter:brightness(0.7); */
    }

    .text-principal{
        margin: 0 auto;
        width: 750px;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .text-principal h2{
        text-align: center;
        font-size: 40px;
        color: #ffffff;
        font-weight: 700;
        text-shadow: 0 2px 2px rgb(0 0 0 / 50%);
        margin-bottom: 10px;
    }

    .text-principal p{
        text-align: center;
        color: #ffffff;
        font-size: 20px;
        text-shadow: 0 2px 2px rgb(0 0 0 / 50%);
    }

    @screen sm{
        .text-principal h2{
            margin-bottom: 20px;
        }
    }

</style>