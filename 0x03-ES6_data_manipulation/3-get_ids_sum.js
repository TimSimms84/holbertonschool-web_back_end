export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((previousValue, currentValue) => (previousValue + currentValue.id), 0);
}
