export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }
  const result = [];
  set.forEach((set) => {
    if (typeof set === 'string' && set.startsWith(startString)) {
      result.push(set.slice(startString.length));
    }
  });
  return result.join('-');
}
