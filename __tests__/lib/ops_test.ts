import { makeOps } from '../../lib/ops';

test('should have two retained characters and one deleted character', () => {
  const ops = makeOps('abc', 'abd');
  expect(ops).toEqual([
    { op: 'retain', value: 'ab' },
    { op: 'delete', value: 'c' },
    { op: 'insert', value: 'd' }
  ]);
});

test('should only have one retained character', () => {
  const ops = makeOps('a', 'a');
  expect(ops).toEqual([{ op: 'retain', value: 'a' }]);
});

test('should be an empty array', () => {
  const ops = makeOps('', '');
  expect(ops).toEqual([]);
});

test('should be an empty array (using default values)', () => {
  const ops = makeOps();
  expect(ops).toEqual([]);
});
