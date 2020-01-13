<template>
  <li>
    <div @click="toggle">
      {{ taxon }}
      <span v-if="hasChildren">[{{ open ? "-" : "+" }}]</span>
    </div>

    <ul v-show="open">
      <taxon v-for="(child, taxon) in tree" :tree="child" :taxon="taxon" :key="taxon"></taxon>
    </ul>
  </li>
</template>

<script>
export default {
  name: "taxon",
  data() {
    return {
      open: false
    }
  },
  props: {
    tree: Object,
    taxon: String
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  computed: {
    hasChildren() {
      return this.tree !== null
    }
  }
}
</script>

<!-- vim:set et nu sw=2 ts=2: -->
