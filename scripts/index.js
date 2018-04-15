var scrapers = require('./scrapers.js');

const marriott_la = {
	place: 'Los Angeles CA, USA',
	fromD: '05/11/18',
	toD: '05/13/18',
	property: 'JW Marriott Los Angeles L.A. LIVE',
	targetPrice: 294
}

const marriott_page = {
	place: 'Page AZ, USA',
	fromD: '05/15/18',
	toD: '05/16/18',
	property: 'Courtyard Page at Lake Powell',
	targetPrice: 224
}

const hertz_az = {
	place: 'Phoenix - Sky Harbor Airport',
	pickup: {day: '05/13/2018', time: '11:30 AM'},
	dropoff: {day: '05/17/2018', time: '11:30 AM'},
	CDP: '211762'
}

const southwest1 = {
	fromP: 'San Francisco, CA - SFO',
	toP: 'Los Angeles, CA - LAX',
	depart: '05/11/2018',
	usePoints: false
}

scrapers.searchMarriott(marriott_page);
scrapers.searchMarriott(marriott_la);
// scrapers.searchHertz(hertz_az);