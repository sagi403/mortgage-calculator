export class RequestValidationError extends Error {
  statusCode = 400;

  constructor(errors) {
    super();
    this.errors = errors;

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}
