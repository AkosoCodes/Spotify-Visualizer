<script>

    export default{
        name: "ArtistTile",
        props: {
            name: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
        }
    }
</script>

<template>
    <div>
        <img :src="image" :alt="name">

        <h1>{{name}}</h1>
    </div>
</template>