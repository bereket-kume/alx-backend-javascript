export default function cleanSet(set, startString) {
  const string = [];
  if (startString === '') return '';
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      string.push(element.slice(startString.length));
    }
  });
  return string.join('-');
}
