import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';

class Employee {
  readonly name: string; // This property is immutable - it can only be read
  private isTester: boolean; // Can only access or modify from methods within this class
  protected email: string; // Can access or modify from this class and subclasses
  public experience: number; // Can access or modify from anywhere - including outside the class

  constructor(n: string, c: boolean, e: string, p: number) {
    this.name = n;
    this.isTester = c;
    this.email = e;
    this.experience = p;
  }

  sayMyName() {
    return `Your not Heisenberg, you're ${this.name}`;
  }
}

const FunctionDemo = () => {
  interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
  }

  let sayStuff: Speech = {
    sayHi: function (name: string) {
      return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
  };

  console.log(sayStuff.sayHi('Jay')); // Hi Jay
  console.log(sayStuff.sayBye('Jay')); // Bye Jay

  // Define a function called circle that takes a diam variable of type number, and returns a string
  function circle(diam: number) {
    return Math.PI * diam;
  }

  // Using explicit typing
  const circleFun2: Function = (diam: number): string => {
    return (
      'The circumference is ' + (Math.PI * diam)?.toFixed(2) + '(Explicit)'
    );
  };

  // Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
  const circleFun3 = (diam: number) => {
    return (
      'The circumference is ' +
      (Math.PI * diam)?.toFixed(2) +
      '(Inferred typing)'
    );
  };

  type StringOrNumber = string | number;

  type PersonObject = {
    name: string;
    id: StringOrNumber;
  };

  const person1: PersonObject = {
    name: 'John',
    id: 1,
  };

  const person2: PersonObject = {
    name: 'Delia',
    id: '2',
  };

  const sayHello = (person: PersonObject) => {
    return 'Hi ' + person.name + '-' + person.id;
  };

  const employee1 = new Employee('Jay', false, 'jay@mail.com', 5);

  // Union type with a literal type in each position
  let favouriteColor: 'red' | 'blue' | 'green' | 'yellow';

  favouriteColor = 'blue';
  favouriteColor = 'crimson'; //Error: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'

  const addID = (obj: object) => {
    let id = Math.floor(Math.random() * 1000);

    return {...obj, id};
  };

  let person22 = addID({name: 'Jay', age: 26});
  console.log(person22.name);

  const addID2 = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);

    return {...obj, id};
  };
  let person3 = addID2({name: 'John', age: 40});
  let person4 = addID2('Sally'); //Error: Argument of type 'string' is not assignable to parameter of type 'object'.
  let person5 = addID(['Sally', 26]);
  // Below, we have explicitly stated what type the argument should be between the angle brackets.
  let person6 = addID<{name: string; age: number}>({name: 'John', age: 40});

  function logLength<T>(a: T) {
    console.log(a.length); // ERROR: TypeScript isn't certain that `a` is a value with a length property
    return a.length;
  }

  interface hasLength {
    length: number;
  }

  function logLengths<T extends hasLength>(a: T[]) {
    a.forEach(element => {
      console.log(element.length);
    });
  }

  let arr = [
    'This string has a length prop',
    ['This', 'arr', 'has', 'length'],
    {material: 'plastic', length: 30},
  ];

  logLengths(arr);

  // The type, T, will be passed in
  interface Person<T> {
    name: string;
    age: number;
    documents: T;
  }

  // We have to pass in the type of `documents` - an array of strings in this case
  const person7: Person<string[]> = {
    name: 'John',
    age: 48,
    documents: ['passport', 'bank statement', 'visa'],
  };

  // Again, we implement the `Person` interface, and pass in the type for documents - in this case a string
  const person8: Person<string> = {
    name: 'Delia',
    age: 46,
    documents: 'passport, P45',
  };

  enum ResourceType {
    BOOK,
    AUTHOR = 4,
    FILM,
    DIRECTOR,
    PERSON,
  }

  enum Direction {
    Up = 'Up',
    Right = 'Right',
    Down = 'Down',
    Left = 'Left',
  }

  const getSong = () => {
    return 'touch of grey';
  };

  let whoSangThis: string = getSong();

  const singles = [
    {song: 'touch of grey', artist: 'grateful dead'},
    {song: 'paint it black', artist: 'rolling stones'},
  ];

  const single = singles.find(s => s.song === whoSangThis);

  function addAnother(val: string | number) {
    if (typeof val === 'string') {
      // TypeScript treats `val` as a string in this block, so we can use string methods on `val` and TypeScript won't shout at us
      return val.concat(' ' + val);
    }

    // TypeScript knows `val` is a number here
    return val + val;
  }

  interface Vehicle {
    topSpeed: number;
  }

  // All trains must now have a type property equal to 'Train'
  interface Train extends Vehicle {
    type: 'Train';
    carriages: number;
  }

  // All trains must now have a type property equal to 'Plane'
  interface Plane extends Vehicle {
    type: 'Plane';
    wingSpan: number;
  }

  type PlaneOrTrain = Plane | Train;

  function getSpeedRatio(v: PlaneOrTrain) {
    if (v.type === 'Train') {
      // TypeScript now knows that `v` is definitely a `Train`. It has narrowed down the type from the less specific `Plane | Train` type, into the more specific `Train` type
      return v.topSpeed / v.carriages;
    }

    // If it's not a Train, TypeScript narrows down that `v` must be a Plane - smart!
    return v.topSpeed / v.wingSpan;
  }

  let bigTrain: Train = {
    type: 'Train',
    topSpeed: 100,
    carriages: 20,
  };

  let bigPlan: Plane = {
    type: 'Plane',
    topSpeed: 1200,
    wingSpan: 80,
  };

  return (
    <ScrollView>
      <View>
        <Text>Hi Function:{sayStuff.sayHi('Jay')}</Text>
        <Text>Bye Function:{sayStuff.sayBye('Jay')}</Text>
        <Text>Circle Function:{circle(12)?.toFixed(2)}</Text>
        <Text>{circleFun2(12)}</Text>
        <Text>{circleFun3(12)}</Text>
        <Text>{sayHello(person1)}</Text>
        <Text>{sayHello(person2)}</Text>
        <Text>Employee Name:{employee1.name}</Text>
        <Text>Favourite color:{favouriteColor}</Text>
        <Text>{employee1.sayMyName()}</Text>
        <Text>{JSON.stringify(person3)}</Text>
        <Text>{JSON.stringify(person4)}</Text>
        <Text>{JSON.stringify(person5)}</Text>
        <Text>Explicit:{JSON.stringify(person6)}</Text>
        <Text>Length:{logLength('hello world jay')}</Text>
        <Text>Person7:{JSON.stringify(person7)}</Text>
        <Text>Person8:{JSON.stringify(person8)}</Text>
        <Text>Enum BOOK:{ResourceType.BOOK}</Text>
        <Text>Enum AUTHOR:{ResourceType.AUTHOR}</Text>
        <Text>Enum PERSON:{ResourceType.PERSON}</Text>
        <Text>Direction:{Direction.Left}</Text>
        <Text>Direction:{Direction.Down}</Text>
        <Text>Artist:{single?.artist}</Text>
        <Text>Narrow Function:{addAnother('Abc')}</Text>
        <Text>Narrow Function:{addAnother(20)}</Text>
        <Text>Train Speed Ratio:{getSpeedRatio(bigTrain)}</Text>
        <Text>Plan Speed Ratio:{getSpeedRatio(bigPlan)}</Text>
      </View>
    </ScrollView>
  );
};

export default FunctionDemo;
