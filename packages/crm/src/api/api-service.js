import { HttpService } from '../services/http-service';

const API_PATH = 'http://localhost:3001/api';

export class ApiService extends HttpService {

  constructor() {
    super(API_PATH);
  }

  getCustomers() {
    return this.get('customers');
  }

  login(authData) {
    return this.post('login', authData);
  }

}

export default new ApiService();