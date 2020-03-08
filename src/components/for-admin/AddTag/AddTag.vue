<template>
  <main class="flex AddingTag">
    <form class="form" id="form" @submit="addTag">
      <label for="type-tag">Type of tag</label>
      <select id="type-tag" v-model="tagType">
        <option v-for="tagType of tagsTypes" :value="tagType.url" :key="tagType.id">{{tagType.name}}</option>
      </select>
      <label for="name">Name tag</label>
      <input v-model="tag.name" id="name" type="text">
      <label for="bgColor">Background color tag</label>
      <input v-model="tag.bg_color" id="bgColor" type="color" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$">
      <label for="textColor">Text color tag</label>
      <input v-model="tag.text_color" id="textColor" type="color" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$">
      <span class="tag" :class="stylesTag">{{tag.name}}</span>
      <button @click="cleanForm">Add tag</button>
    </form>
  </main>
</template>

<script>
    import _AddTag from './_AddTag.scss'

    export default {
        props: {},
        data() {
            return {
                tagType: 'location_tags',
                tag: {
                    name: null,
                    bg_color: '#CCCCCC',
                    text_color: '#333333',
                },
                tagsTypes: [
                    {
                        id: 0,
                        name: "location",
                        url: "location_tags"
                    },
                    {
                        id: 1,
                        name: "plot",
                        url: "plot_tags",
                    },
                    {
                        id: 2,
                        name: "art",
                        url: "art_tags",
                    },
                    {
                        id: 3,
                        name: "relationship",
                        url: "relationship_tags",
                    },
                ],
                stylesTag: {

                },
            }
        },
        methods: {
            addTag() {
                if (this.tag.name) {
                    this.$store.dispatch(`http_tag_module/SET_TAG_TO_API`,
                        {payload: this.tag, url: this.tagType});
                }
            },
            cleanForm() {
                document.getElementById('form').reset();
            }
        },
        css: [
            _AddTag,
        ],
    };
</script>
