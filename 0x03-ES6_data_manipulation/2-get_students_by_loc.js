export default function getStudentsByLocation(array, location) {
  return array.filter((item) => item.location === location);
}
