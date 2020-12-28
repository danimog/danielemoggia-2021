<template>
    <div>
        <div v-for="post in posts">
            <h3>
                <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
            </h3>
            <span class="h6">{{ post.frontmatter.date }}</span>
            <p>{{ post.frontmatter.description }}</p>

            <!-- <p><router-link :to="post.path">Leggi ...</router-link></p> -->
            <hr>
        </div>
        
    </div>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            }
        },

    }
</script>

<style scoped>

</style>