<template>
    <div class="message" style='margin-bottom:20px'>
        <p class="meta">{{msg.name}} <span>{{msg.time}}   </span></p>
        <p class="text">
            {{msg.message}}
        </p>
    </div>
</template>

<script>
export default {
    props:['msg'],
}
</script>

<style>

</style>