export class ResponseT {
  status: number;
  message: string | string[];
  data: any;

  constructor(status: number, message: string | string[], data: any) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
