export default class ErrorRepository extends Map {
  translate(code) {
    if (this.has(code)) {
      return this.get(code);
    }
    return 'Unknown error';
  }
}
