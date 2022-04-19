export const errorHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
};
