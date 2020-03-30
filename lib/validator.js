'use strict';


/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
class Validator{
  constructor(schema){
    this.schema= schema;
  }
  isValid (input) {
    let valid = true;

    for(let fieldName in this.schema) {
      let field = this.schema[fieldName];
      let required = field.required ? this.isTruthy(input[fieldName]) : true;
      let type = field.type
      ? this.isCorrectType(input[fieldName],field.type)
      :true;

      if(!(required && type)){
        valid = false;
      }
    }
   return valid;
  };

  
  isCorrectType(value, type){
    switch(type) {
      case "string":
         return this.isString(value);
      case "number":
         return this.isNumber(value);
      case "array":
         return this.isArray(value);
      case "object":
         return this.isObject(value);
      case "boolean":
         return this.isBoolean(value);
      case "function":
         return this.isFunction(value);
      default:
        return false;
    }
  };

  isTruthy = function (field){
    
    return !!field;
  
  };


isString = (input) => {
  return typeof input === 'string';
};

isNumber = (input) => {
  return typeof input === 'number';
};

isObject = (input) => {
  return typeof input === 'object';
};

isBoolean = (input) => {
  return typeof input === 'boolean';
};

isFunction = (input) => {
  return typeof input === 'function';
};

isArray = (input) => {
  return Array.isArray(input);
};
}

module.exports = Validator;
