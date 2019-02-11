import { Router } from "express";
import { get, add } from "./UserService";
class User {
  constructor(router) {
    this.router = Router()
      .get("/user", this.get.bind(this))
      .post("/user", this.add.bind(this));
  }

  get(req, res, next) {
    get()
      .then(users => res.json(users))
      .catch(next);
  }

  add(req, res, next) {
    add({
      name: req.body.name,
      password: req.body.password
    })
      .then(user => res.json(user))
      .catch(next);
  }

  getRouter() {
    return this.router;
  }
}
export default User;
