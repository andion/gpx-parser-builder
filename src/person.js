import Link from './link';

export default class Person {
  constructor(object) {
    this.name = object.name;
    this.email = object.email;
    this.link = object.link && new Link(object.link);
  }
}
