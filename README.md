Random Code Showcase
====================

# Contents
* JavascriptToggle.html - Javascript & CSS manipulation
* RichOutput.js -  Key - Value Dictionary Decoding
* Other quick fooling around

# Reference
## ES5
.indexOf("this", 7) // start at 7th char

.lastIndexOf

localCompare

str.match //counts

str.search // index of

one by comparison is called dictionary or lexical comparison

ternary ? true : false;

Array.isArray(array);

shift
unshift

find
findIndex
filter

// Map with function
{
		function square(num) {
				return num * num
		}

		var result = arr.map(square);
}

// Execute function for each element
{
		grades.forEach(function(element) {
				console.log(element);
		});
}

reduce()

arguments

// Sort array
{
		function displayShares(shares) {
				for (var i = 0; i < shares.length; i++){
					console.log(`${shares[i].name} \t
					${shares[i].price}`);
				}
		};

		function compareBy(property) {
				return function(a, b){
						var propA = a[property];
						var propB = b[property];
						if (propA < propB) {
								return -1;
						}

						if (propA > propB) {
								return 1;
						}

						return 0;
				}
		}

		displayShares(shares.sort(comparyBy('name')));
}

// apply / call
{
		var obj = {animal: 'Lion', sleepDuration: '14 and 18 hours.'};

		function greet(greeting) {
				console.log(greeting);
				var = [this.animal, 'typically sleepDuration
				between', this.sleepDuration].join(' ');
				console.log(reply);
		}

		greet.apply(obj, ['Welcome to Forest:']);
		greet.call(obj, 'Welcome to Forest:');
}

clearTimeout

// See properties of an object
{
		for (var property in emp){
				console.log(property)
		}
}

// Define object property
{
		Object.defineProperty(empDetials, 'fullName', {
				get() {
						return this.firstName + '  ' + this.lastName;
				},

				set(value) {
						var sections = value.split('  ');
						if (sections.length == 2) {
								this.firstName = sections[0];
								this.lastName = sections[1];
						} else {
								throw 'Invalid format: Name';
						}
				}
		});

		console.log(empDetials.firstName);
		empDetails.fullName = 'Smith Roy';		
}

// Overriding object object string
{
		function emp(ename, age) {
				return {
						ename: ename,
						age: age,

						toString: function() {
								return 'Emplyee: ' + '\'' + ename + '\'';
						},

						valueOf: function() {
								return age + ' Years Old
						}
				};			
		}
}

// New prototype
{
		Emp.prototype.empFullName = function() {
				console.log('Employee Name is: ' +
				this.firstName + ' ' + this.lastName);
		}
}

smith.__proto__

Object.setPrototypeOf(func1,func2)

for (var empProp of Object.entries(emp)){

for (var empProp of Object.keys(emp)){

for (var empProp of Object.values(emp)){

hasOwnProperty();

bird.__proto__ = animal;

// Parse json error
{
		try {
			let emp = JSON.parse(json);
			console.log(emp.name);
}

finally

# ES6

// Overide method
let empDetails = Reflect.construct(Employee, args, NewEmplyee)

str.startsWith()
str.endsWith()
str.repeat(3)

str.search(regex);
str.split(' ', 4)

console.log("Jujhar is King".fontsize(7));

Number.isFinite(123);
Math.sign(-1);
Math.trunc(3.2);
Math.cbrt(8);

sameSymbol = Symbol.for('deptID')

export function name();
import {message} from './util.js';
<script src="es6/mod.js" type="module"></script>

export {message, get Msg, setMsg};
import * as myUtility from './utils.js';

export default utility
import utility from './util.js'

function hello(args...) {

let chars = ['M', ...'NOP', 'Q'];

let mergeArr2 = [...arr1, ...arr2];

// Merging objects
{
		let emp1 = {ename: 'Smith', dept: 'R&D'};

		let clonedObj = {...emp1};

		let emp2 = {ename: 'Jones', sal: '300000'};
		let mergedObj = {...emp1, ...emp2};
}

for (let char of str){

for (let [key, value] of departments) {

// loops over properties
for (let dept of departments)

// Define new method in object literal
let emp = {
		name,
		cats: 42,
		getEmpInfo() {
			console.log("hi");
		}
};

/n/

// Deconstructing arrays
{
		function returnDepartments(){
				return [10, 20, 30]
		}

		let [d1, , d3] = returnDepartments();
}

let {age = 25, unMarried = true} = emp;

class Employee {
		constructor(ename){
				this.ename = ename;
		}

		empName() {
				console.log('Employee Name: ' + this.ename);
		}
}

get FullName(){
		return this.firstName.toUpperCse() + ' ' +
		this.lastName.toUpperCase()
}

get [ename]() {

class Developer extends Employee {
		constructor(experience, netSalary) {
			super('Javascript Developer')

// Extend built in
class EmpInfo extends String {
		concat() {
				return new EmpInfo(this + Array.prototype.join.call(arguments, ' => '));
		}
}

if (! new.target) {

new.target.name // Class name

let proxy = new Proxy(target, handler);

{
		let handler = {
			set: function(target, property, value){
				if (typeof value === 'number' ||
				!isNaN(value)) {
					Reflect.set(target, property, value);
				}
			}
		};
}

const arr = Array.from(arrayLikeObj);

const arr = Array.from(arrayLikeObj.keys());

deptArr.fill( 50, 0);
deptNo.copyWithin( 0, 2, 4);

const result = gadgets.find(mobile => mobile.name === 'iPhone');			

Object.assign(obj1, obj2, obj3);
Object.assign({}, obj1, obj2, obj3);
Object.assign(Object.create(origProto), origObj);

Object.setPrototypeOf(mrg, emp);


var result = arr.map(num => num * num);

grades.forEach(function(element) {
		console.log(element);
}

let arun = {ename: 'Arun Dase'};
let empRoles = new Map();
empRoles.set(arun, 'Developer');

empRoles.has(guru);

setNo.add(10);
setNo.has(11);
setNo.size;


## ES7
let 3 ** 4;
list **= 4

[NaN].includes(NaN);

## ES8
let salary = '12345'.padStart(9, '0');

let dept = [10, 20, 30,] // dense array

Object.entries(emp);
Object.entries(emp)[1];
Object.entries('Hey'); // Character map

Object.getOwnPropertyDescriptors();

async function getContent() {
	const response = await fetchResponse();
}

## ES9
String.raw`\u{4B}`
templObj.raw

/JS.ES9/s.test('JS\nES9')

## ES10
fruit.flat();

untrimmedString.trimLeft()

Object.fromEntries
Object.entries

sym.description

# Resources
https://github.com/vuejs/awesome-vue#components--libraries

https://nicedoc.io/brillout/awesome-react-components

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

Maksim Ivanov (YouTube)
