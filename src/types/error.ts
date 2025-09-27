export interface ErrorDetails {
  field: string;
  message: string;
};

export interface ErrorData {
  error: string;
  message: string;
  details?: ErrorDetails[];
};

export interface AppError {
  status: number;
  response: {
    data: ErrorData;
  };
};
