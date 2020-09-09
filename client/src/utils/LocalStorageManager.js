class LocalStorageManager {
  constructor() {
    this.jwtToken = 'x-auth-token';
    this.userId = 'userId;';
    this.username = 'username';
  }

  saveUser(data) {
    console.log('Saved User to LSM');
    localStorage.setItem(this.jwtToken, data.jwtToken); // send this auth token in headers for api endpoints
    localStorage.setItem(this.userId, data.user.id);
    localStorage.setItem(this.username, data.user.name);
  }

  removeUser() {
    localStorage.removeItem(this.jwtToken);
    localStorage.removeItem(this.userId);
    localStorage.removeItem(this.username);
  }
}

const localStorageManager = new LocalStorageManager();
export default localStorageManager;
