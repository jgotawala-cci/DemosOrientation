import React from 'react';
import {ScrollView, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';

const VariableDemo = () => {
  let name = 'Danny';
  name.toLowerCase();
  console.log(name); // Danny - the string method didn't mutate the string

  let arr = [1, 3, 5, 7];
  console.log(arr); // [1, 3, 5] - the array method mutated the array
  arr.pop();

  name = name.toLowerCase(); // Assignment gives the primitive a new (not a mutated) value

  let id: number = 5;
  let fullname: string = 'Danny Rand';
  let hasDog: boolean = true;

  let unit: number; // Declare variable without assigning a value
  unit = 5;

  let age: string | number;
  age = 26;
  //   age = '27';

  let objectfirstname = new String('Danny');
  console.log({objectfirstname}); // String {'Danny'}

  let x = 2;
  let y = 1;

  x = y;
  y = 100;
  console.log(x); // 1 (even though y changed to 100, x is still 1)

  let point1 = {x: 1, y: 1};
  let point2 = point1;

  point1.y = 100;
  console.log('point2.y', point2.y); // 100 (point1 and point2 refer to the same memory address where the point object is stored)

  let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
  let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
  let options: boolean[] = [true, false, false]; //can only contain true or false
  let books: object[] = [
    {name: 'Fooled by randomness', author: 'Nassim Taleb'},
    {name: 'Sapiens', author: 'Yuval Noah Harari'},
  ]; // can only contain objects
  let arr2: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

  ids.push(6);
  ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

  let person: (string | number | boolean)[] = ['Danny', 1, true];
  person[0] = 100;
  person[1] = {name: 'Danny'}; // Error - Type '{ name: string; }' is not assignable to type 'string | number | boolean'.

  let person2: [string, number, boolean] = ['Danny', 1, true];
  person2[0] = 100; // Error - Type 'number' is not assignable to type 'string'.

  // Declare a variable called person with a specific object type annotation
  let person3: {
    name: string;
    location: string;
    isProgrammer: boolean;
  };

  // Assign person to an object with all the necessary properties and value types
  person3 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };

  person3.isProgrammer = 'Yes'; // ERROR: Type 'string' is not assignable to type 'boolean'.

  person3 = {
    name: 'John',
    location: 'US',
  }; // ERROR: variableDemo.tsx(66, 5): 'isProgrammer' is declared here.

  interface Eployee {
    name: string;
    location: string;
    isProgrammer: boolean;
  }

  let employee1: Eployee = {
    name: 'Jay',
    location: 'Surat',
    isProgrammer: true,
  };

  let employee2: Eployee;
  employee2 = {
    name: 'Parth',
    location: 1, //Error: Type 'number' is not assignable to type 'string'.
    isProgrammer: false,
  };

  let age11: any = '100';
  age11 = 100;
  age11 = {
    years: 100,
    months: 2,
  };

  return (
    <ScrollView>
      <View>
        <Text>Name:{name}</Text>
        <Text>Array:{arr?.toString()}</Text>
        <Text>Id:{id}</Text>
        <Text>Full Name:{fullname}</Text>
        <Text>Has Dog:{hasDog?.toString()}</Text>
        <Text>Unit:{unit}</Text>
        <Text>Age:{age}</Text>
        <Text>Object Full Name:{objectfirstname?.toString()}</Text>
        <Text>X:{x}</Text>
        <Text>Y:{y}</Text>
        <Text>Ids Array:{ids?.toString()}</Text>
        <Text>Names Array:{names?.toString()}</Text>
        <Text>Options Array:{options?.toString()}</Text>
        <Text>Any Array:{arr2?.toString()}</Text>
        <Divider />
        <Text>Books Array with Objects</Text>
        {books?.map((item, index) => {
          return (
            <View key={index}>
              <Text>
                {item?.name}-{item?.author}
              </Text>
            </View>
          );
        })}
        <Divider />
        <Text>Person Array:{JSON.stringify(person)}</Text>
        <Text>Person2 Array:{JSON.stringify(person2)}</Text>
        <Text>Person3 Object:{JSON.stringify(person3)}</Text>
        <Text>Eployee1 Array:{JSON.stringify(employee1)}</Text>
        <Text>Eployee2 Array:{JSON.stringify(employee2)}</Text>
        <Text>Aged Any:{JSON.stringify(age11)}</Text>
      </View>
    </ScrollView>
  );
};

export default VariableDemo;
