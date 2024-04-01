const myObj = {
  a: 1,
  b: 'hello',
  c: { e: 1, f: 2, d: {g: 3} },
};

const deepFreeze = (obj1) => {
  Object.keys(obj1).forEach((property) => {
    if (
      typeof obj1[property] === "object" &&
      !Object.isFrozen(obj1[property])
    )
      deepFreeze(obj1[property]);
  });
  return Object.freeze(obj1);
};

myObj.c.e = 2
myObj.c.d.g = 4;

deepFreeze(myObj);

myObj.c.e = 3; // TypeError: Cannot assign to read only property 'e' of object '#<Object>'
myObj.c.d.g = 5; // TypeError: Cannot assign to read only property 'e' of object '#<Object>'