const findTheOldest = function (people) {
	const ages = people.map((person) => (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth);
	console.log(ages);
	const sortedAges = ages.toSorted((a, b) => (a > b ? -1 : 1));
	console.log(sortedAges);
	const oldestPersonId = ages.indexOf(sortedAges[0]);
	console.log(oldestPersonId);
	const oldestPerson = people[oldestPersonId];
	console.log(oldestPerson);
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
