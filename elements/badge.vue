<template>
    <div v-cloak class="badge" :class="badgeStyle">
        <slot></slot>
    </div>
</template>

<script>
const DEFAULT_TYPE = 'solid';
const TYPES = new Set([
    'solid',
    'ghost',
]);

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
        'type': String,
        'color': String,
    },
    computed: {
        badgeStyle() {
            const type = TYPES.has(this.type) ? this.type : DEFAULT_TYPE;
            const color = COLORS.has(this.color) ? this.color : DEFAULT_COLOR;

            return `badge-${type}-${color}`;
        },
    },
}

</script>
