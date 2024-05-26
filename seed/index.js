const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author: "639eb6a653fce04548188a46",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            price: random1000,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ],
            },
            images: {
                url: "https://res.cloudinary.com/dhnzl4qad/image/upload/v1671843213/YelpCamp/lbv9i5lqsagewbihbyov.jpg",
                filename: "YelpCamp/lbv9i5lqsagewbihbyov",
            },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, natus facilis! Reiciendis numquam et ratione vitae qui architecto corrupti, cum accusamus itaque tempora nemo vero? Voluptas cum officia delectus unde.",
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
