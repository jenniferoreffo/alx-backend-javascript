export default function getListStudentIds(arr) {
  // check if array is empty using Array.isArray method //
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((student) => student.id);
}
