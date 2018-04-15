var osmosis = require('osmosis');

exports.searchSouthwest = (criteria) => {
	osmosis
		.get('https://www.southwest.com/flight/?clk=GSUBNAV-AIR-BOOK')
		.submit('#buildItineraryForm', {
			'twoWayTrip': 'false',
			'originAirport_displayed': criteria.fromP,
			'destinationAirport_displayed': criteria.toP,
			'outboundDateString': criteria.depart,
			'fareType': usePoints ? 'POINTS' : 'DOLLARS'
		})
		.find('.air-booking-select-detail')
		.set({
			'Departure': '.air-operations-time-status'
		})
}

exports.searchHertz = (criteria) => {
	osmosis
		.get('https://www.hertz.com/rentacar/reservation/')
		.submit('#res-form', {
			'pickupLocation': criteria.place,
			'pickupDay': criteria.pickup.day,
			'pickupTime': criteria.pickup.time, 
			'dropoffDay': criteria.dropoff.day,
			'dropoffTime': criteria.dropoff.time,
			'cdpField': criteria.CDP,
			'trip-type': 'leisure'
		})
		.log(console.log)
}

exports.searchMarriott = (criteria) => {
	osmosis
		.get('https://www.marriott.com/search/default.mi')
		.submit('#edit-search-form', {
			'destinationAddress.destination': criteria.place,
			'fromDate': criteria.fromD,
			'toDate': criteria.toD
		})
		.find('.property-record-item')
		.set({
			'Name': 'h3',
			'Lowest': '.t-price'
		})
		.data(item => {
			if (!criteria.property || item.Name === criteria.property) {
				if (criteria.targetPrice && parseInt(item.Lowest.replace(',', '')) < criteria.targetPrice){
					console.log(`NEW LOWER PRICE AT ${item.Name}: $${item.Lowest}`);
				} else {
					console.log(`${item.Name}: $${item.Lowest}`);
				}
			}
		})
};