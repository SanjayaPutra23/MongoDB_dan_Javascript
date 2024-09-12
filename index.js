const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/movie_db")
    .then(() =>  {
        console.log("connected to MongoDB")
    }).catch((err) => {
        console.log(err)
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    director: String,
    score: Number,
});

const Movie = mongoose.model('Movie', movieSchema)



// find movie berdasarkan tahun
// Movie.findOne({year: {$gte: 2018}, genre: 'Drama'}).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// find by id
// Movie.findOne({_id: '66e2d8f2cd0fc6e938a98985'}).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// Movie.findById('66e2d8f2cd0fc6e938a98985').then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// Update Data
// Movie.updateMany({ year: {$lt: 2019}}, {score: 8}).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// Movie.findByIdAndUpdate("66e2d8f2cd0fc6e938a98983", { score: 10 }, { new: true }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// Delete Data
// Movie.deleteOne({ title: "Avengers: Infinity War"}).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

Movie.findByIdAndDelete("66e2d8f2cd0fc6e938a98984").then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

// console.log(getMovie)

// const movie = new Movie({
//     title: 'Amadeus',
//     year: 1986,
//     genre: 'Action',
//     director: 'Ridley Scott',
//     score: 9.2
// });

// Movie.insertMany([
//     {
// 		"title": "Black Panther",
// 		"genre": "Action",
// 		"director": "Ryan Coogler",
// 		"year": 2018,
// 		"rating": 7.3
// 	},
// 	{
// 		"title": "Avengers: Infinity War",
// 		"genre": "Action",
// 		"director": "Anthony Russo, Joe Russo",
// 		"year": 2018,
// 		"rating": 8.4
//     },
// 	{
// 		"title": "Joker",
// 		"genre": "Crime",
// 		"director": "Todd Phillips",
// 		"year": 2019,
// 		"rating": 8.4
// 	},
// 	{
// 		"title": "Parasite",
// 		"genre": "Drama",
// 		"director": "Bong Joon Ho",
// 		"year": 2019,
// 		"rating": 8.6
// 	},
// 	{
// 		"title": "Spider-Man: Into the Spider-Verse",
// 		"genre": "Animation",
// 		"director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
// 		"year": 2018,
// 		"rating": 8.4
// 	}
// ]).then(() => {
//     console.log("It works");
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// movie.save();