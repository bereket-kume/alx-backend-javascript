export default function getStudentIdsSum(students) {
  return students.reduce((val, cur) => val + cur.id, 0);
}
