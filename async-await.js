const fs = require('fs');

// Async / Await
const readFileAsync = (uuid) => {
	if (!uuid) {
		return Promise.reject("Error UUID");
	}

	return new Promise((resolve, reject) => {
		fs.readFile('data/info.txt', (err, data) => {
			if (err) {
				reject(err);
			}
			resolve({ content: data.toString('utf-8'), uuid });
		})
	});
};

const readFileAsync2 = (uuid) => {
	if (!uuid) {
		return Promise.reject("Error UUID");
	}

	return new Promise((resolve, reject) => {
		fs.readFile('data/info.txt', (err, data) => {
			if (err) {
				reject(err);
			}
			resolve({ content: data.toString('utf-8'), uuid });
		})
	});
};

exports.readFileAsync3 = (uuid) => {
	if (!uuid) {
		return Promise.reject("Error UUID");
	}

	return new Promise((resolve, reject) => {
		fs.readFile('data/info.txt', (err, data) => {
			if (err) {
				reject(err);
			}
			resolve({ content: data.toString('utf-8'), uuid });
		})
	});
};

module.exports = {
	readFileAsync,
	readFileAsync2
};

// module.exports = readFileAsync;

// Promise.all([readFileAsync(5), readFileAsync(3)])
// 	.then(results => {
// 		console.log(results);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// Promise.race([readFileAsync(), readFileAsync(3)])
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const funcReadFile = async () => {
	try {
		const data = await readFileAsync();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
// funcReadFile();

// IIFE
// (async () => {
// 	try {
// 		const data = await readFileAsync();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// })();

// readFileAsync()
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
