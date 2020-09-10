class LocalStorageManager {
  constructor() {
    this.jwtToken = 'x-auth-token';
  }

  saveUser(data) {
    console.log('Saved User to LSM');
    localStorage.setItem(this.jwtToken, JSON.stringify(data)); // send this auth token in headers for api endpoints
  }

  getUser() {
    const data = JSON.parse(localStorage.getItem(this.jwtToken));
    console.log(`Retrieved user: ${data.user.name}`);
  }

  removeUser() {
    localStorage.removeItem(this.jwtToken);
  }
}

const localStorageManager = new LocalStorageManager();
export default localStorageManager;
