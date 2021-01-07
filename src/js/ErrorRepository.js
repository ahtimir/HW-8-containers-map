/* eslint-disable linebreak-style */

export default class ErrorRepository {
  constructor() {
    this.errorLogs = new Map();
  }

  translate(code) {
    if (this.errorLogs.has(code)) {
      return this.errorLogs.get(code);
    }
    return 'Unknown error';
  }
}
