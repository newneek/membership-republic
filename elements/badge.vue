<template>
  <div class="badge badge-red">
    <slot></slot>
  </div>
</template>

<script lang="ts">

export default {
  props: [
    'type',
    'color',
  ]
}

</script>
