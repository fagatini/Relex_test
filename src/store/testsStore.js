import { makeAutoObservable } from "mobx";
import { TestsArray } from "../tests_const";

class Tests {
  tests = TestsArray;

  constructor() {
    makeAutoObservable(this);
  }

  createNewTest(test) {
    const newTest = {
        id: this.tests[this.tests.length - 1].id + 1,
        title: test.title,
        isShowed: true,
        questions: test.questions}
    this.tests = [ ...this.tests, newTest ];
  }

  removeTest(id) {
    this.tests = this.tests.filter((test) => test.id !== id);
  }

  changeShowTest(id) {
    let index = this.tests.indexOf(this.tests.find((test) => test.id === id));
    this.tests[index].isShowed = !this.tests[index].isShowed;
  }

}

export default new Tests();
