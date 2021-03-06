export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  int8view[position] = value;
  return new DataView(buffer, int8view);
}
