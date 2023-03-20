import * as React from "react";

let values = ['\x61', '\x6F', '\x63', '\x4D'];

function randomInt(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
  }
function makeSubstitution(text) {
	let subn = text.replace(/[а]/g, values[0]);
	subn = subn.replace(/[о]/g, values[1]);
	subn = subn.replace(/[с]/g, values[2]);
	subn = subn.replace(/[М]/g, values[3]);

	return subn;
}
 
function textCrypto(text) {
	const textLng = text.length;
	let interval = randomInt(1, textLng-1);
	let substitution = makeSubstitution(text);
	let result = substitution.split(substitution[interval]).join(`\uFEFF${substitution[interval]}\uFEFF`);
	return result;
}

export default ({children}) => {
	return textCrypto(children)};