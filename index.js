const fs = require('fs');
const path = require('path');
const readline = require('readline');

const fileName = path.resolve('data', 'info.txt');
console.log(fileName);

const newFile = path.resolve('data', 'exemple.txt');

// Lecture fichier
fs.readFile(fileName, (err, data) => {
	console.log('>Lecture du fichier');

	if (err) {
		console.error(err);
		return;
	}

	console.log('Version brut du fichier');
	console.log(data);

	console.log('Version humaine du fichier');
	console.log(data.toString('utf-8'));
});

// Ecriture de fichier
const data = `
@Component()
class Person {
	constructor() {

	}
}
`;
fs.writeFile(newFile, data, { flag: 'a' }, (error) => {

	if (error) {
		console.log(error);
		return;
	}

	console.log("Ecriture OK ❤️");
});

// Obtenir les informations d'un fichier
fs.stat(fileName, (err, stats) => {
	if (err) {
		console.log("Error");
		return;
	}

	console.log(stats);

	if (stats.isFile()) {
		console.log("Ceci est un fichier");
	} else if (stats.isDirectory()) {
		console.log('Ceci est un répertoire');
	}
});

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

reader.question("Voulez vous le système de routing ? (y/N)", (answer) => {
	console.log(answer);

	reader.close();
});
