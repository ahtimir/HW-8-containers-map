/* eslint-disable linebreak-style */

export default class ErrorRepository {
  constructor() {
    this.errorLogs = new Map();
  }

  addError(number, string) {
    this.errorLogs.set(number, string);
  }

  translate(code) {
    const message = this.errorLogs.get(code);
    if (message === undefined || null || '') {
      return 'Unknown error';
    }
    return message;
  }
}
