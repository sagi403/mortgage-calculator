export class RequestValidationError extends Error {
  statusCode = 400;

  constructor(errors) {
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serialErrors() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}
