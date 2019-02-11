class UserService {
  constructor() {
    this.users = {};
  }

  get() {
    return new Promise((resolve, reject) => {
      let user = {
        name: "shula",
        id: "1"
      };
      resolve(user);
    });
  }

  add(user) {}
}
export default new UserService();
