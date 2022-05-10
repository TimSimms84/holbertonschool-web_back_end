export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((previousValue, currentValue) => (previousValue + currentValue.id), 0);
}
