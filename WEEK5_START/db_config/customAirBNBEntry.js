//NEW

const mongoose = require("mongoose");

const AirBNBSchemaNew = new mongoose.Schema({
        id: Number,
        NAME: 'string',
        host_id: Number,
        host_identity_verified: 'string',
        host_name: 'string',
        neighbourhood_group: 'string',
        neighbourhood: 'string',
        lat: Number,
        long: Number,
        country: 'string',
        country_code: 'string',
        instant_bookable: 'string',
        cancellation_policy: 'string',
        room_type: 'string',
        Construction_year: Number,
        price: 'string',
        service_fee: 'string',
        minimum_nights: Number,
        number_of_reviews: Number,
        last_review: 'string',
        reviews_per_month: Number,
        review_rate_number: 'string',
        calculated_host_listings_count: 'string',
        availability_365: Number,
        house_rules: 'string',
        license: 'string'
      }
  

);
//put here the collection name :)
//1st par singular name
//2nd  - schema
const AirBNBNew = mongoose.model("AIRNEWENTRY", AirBNBSchemaNew);

module.exports = AirBNBNew;
