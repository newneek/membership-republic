<template>
    <div v-cloak class="tag" :class="tagStyle">
        <slot></slot>
    </div>
</template>

<script>

const DEFAULT_COLOR = 'gray';
const COLORS = new Set([
    'gray',
    'red',
    'coral',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'magenta',
]);

export default {
    props: {
        'color': String,
    },
    computed: {
        tagStyle() {
            const color = COLORS.has(this.color) ? this.color : DEFAULT_COLOR;
            return `tag-${color}`;
        },
    },
}

</script>
