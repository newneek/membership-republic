import { StyleSheet } from 'react-native';

const flex = StyleSheet.create({
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
});

const direction = StyleSheet.create({
  row: {
    flexDirection: 'row',
    ...StyleSheet.create({ reverse: { flexDirection: 'row-reverse' } }),
  },
  column: {
    flexDirection: 'column',
    ...StyleSheet.create({ reverse: { flexDirection: 'column-reverse' } }),
  },
});

const grow = StyleSheet.create({
  grow1: { flexGrow: 1 },
});

const wrap = StyleSheet.create({
  wrap: { flexWrap: 'wrap', ...StyleSheet.create({ reverse: { flexWrap: 'wrap-reverse' } }) },
  nowrap: { flexWrap: 'nowrap' },
});

export default { ...flex, ...direction, ...grow, ...wrap };
