BUG FIX when accessing "Options" data from api:
Identifier directly after number.

FIX: 
Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});