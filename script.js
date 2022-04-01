
//Problem 1

inputNumber(22);

function inputNumber(number){
    if(number % 7 === 0 && number % 3 != 0){
        console.log('BANG');
    }else if(number % 3 === 0 && number % 7 != 0 ){
        console.log('BONG')
    }else if(number % 3 === 0 && number % 7 === 0){
        console.log('BANGBONG');
    }else{
       console.log(number);
    }
}

//Problem 2

   const person = {
     firstName: 'Pétur',
     age: 35,
     hairColor: 'blonde',
 }

  const doppelganger = {
      firstname: 'Pétur',
      age: 45,
      hairColor: 'blonde',
  }
  const createOlderDoppelganger = (person,doppelganger) => {
      const newPerson = {firstName: person.firstName, age: doppelganger.age, hairColor: person.hairColor}
          return newPerson;
      };
  console.log(createOlderDoppelganger(person, doppelganger));
  