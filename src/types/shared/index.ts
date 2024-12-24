export interface SuccessResponse {
  message: string;
}

export interface ErrorResponse {
  message: string;
  code: string;
}

export interface ErrorValidationResponse extends ErrorResponse {
  validations: string[];
}
