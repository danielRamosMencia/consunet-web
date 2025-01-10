export interface SuccessResponse {
  message: string;
}

export interface ErrorResponse {
  code: string;
  error: string;
}

export interface ErrorValidationResponse extends ErrorResponse {
  validations: string[];
}

export interface SelectOptions {
  id: string;
  name: string;
  code: string;
}
