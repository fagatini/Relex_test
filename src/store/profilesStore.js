import { makeAutoObservable } from "mobx";
import { Users } from "../users_const";

class Profiles {
    profiles = Users;

    constructor() {
      makeAutoObservable(this);
    }
}

export default new Profiles();

