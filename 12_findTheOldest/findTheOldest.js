const findTheOldest = function (people) {
	const ages = people.map((person) => (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth);
	const sortedAges = ages.toSorted((a, b) => (a > b ? -1 : 1));
	const oldestPersonId = ages.indexOf(sortedAges[0]);
	const oldestPerson = people[oldestPersonId];
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
