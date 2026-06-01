import express from "express";

interface IError {
  message: string;
  statusCode: number;
  stack?: string;
  cause: number;
}

export const globalErrorHandler = (
  err: IError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "Something went wrong",
  });
};

export const notFoundHanlder = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  res.status(404).json({ message: "Route not found" });
};

export const asyncHandler =
  (fn: Function) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    fn(req, res, next).catch((err: IError) => next(err));

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
