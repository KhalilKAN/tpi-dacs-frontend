<template>
    <div class="container-campo">
        <input v-if="pass == 1" :id="id" type="password">
        <input v-else :id="id" :class="clase" type="text">
        <label :for="id">{{label}}</label>
    </div>
</template>

<script>

export default{
    name: 'Campo',
    props:[
        'label',
        'id',
        'clase',
        'pass'
    ],
}
</script>

<style scoped>
    .container-campo{
        position: relative;
    }
    input{
        width: 100%;
        height: 44px;
        padding: 0 20px;
        border: 1px solid rgb(0, 0, 0, 0.2);
        border-radius: 10px;
        outline: none;
    }

    label{
        position: absolute;
        left: 0;
        top: -30px;
        font-family: 'Encode Sans', sans-serif;
        font-weight: 600;
        font-size: 15px;
        color: #666666;
        cursor: pointer;
    }

</style>
