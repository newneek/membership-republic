import { StyleSheet } from 'react-native';

const flex = StyleSheet.create({
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
});

const direction = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

const grow = StyleSheet.create({
  grow0: { flexGrow: 0 },
  grow1: { flexGrow: 1 },
});

const shrink = StyleSheet.create({
  shrink0: { flexShrink: 0 },
  shrink1: { flexShrink: 1 },
});

const wrap = StyleSheet.create({
  wrap: { flexWrap: 'wrap' },
  nowrap: { flexWrap: 'nowrap' },
});

export default { ...flex, ...direction, ...grow, ...shrink, ...wrap };
