/* Trips API endpoint */
const tripsEndpoint ='http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}
//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = async function(req, res, next) {
    console.log('Calling trips endpoint...');
    await fetch(tripsEndpoint, options) // Call the API at the trips endpoint
        .then(res => res.json()) // Get the request as json
        .then(json => { // Pass the json to this rendering
            console.log('Got trip data:', json);
            let message = null;
            if (!(json instanceof Array )) { // If the json is not an array
                message = 'API lookup error';
                json = []; // Return an empty array
            } else {
                if(!json.length) { // If the json object is empty when hitting the API endpoint, there's no trips data in db
                    message = 'No trips exist in our database!';
                }
            }
            console.log('Rendering travel page...');
            res.render('travel', {title: 'Travlr Getaways', trips:json, message});
            
        })
        .catch(err => res.status(500).send(e.message));
};



module.exports = {
    travel
}