const mongoose = require("mongoose");

// Koneksi ke MongoDB
mongoose.connect("mongodb://localhost:27017/shopApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Buat skema untuk Product
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

// Model Product
const Product = mongoose.model("Product", productSchema);

// Fungsi untuk menambahkan produk secara acak
async function createRandomProduct() {
  const productNames = ["Laptop", "Headphones", "Mouse", "Keyboard", "Monitor"];
  const categories = ["Electronics", "Accessories", "Gaming"];

  // Buat produk dengan nama, harga, dan kategori acak
  const newProduct = new Product({
    name: productNames[Math.floor(Math.random() * productNames.length)],
    price: Math.floor(Math.random() * 1000) + 100, // Harga antara 100 - 1100
    category: categories[Math.floor(Math.random() * categories.length)],
  });

  // Simpan produk ke database
  await newProduct.save();
  console.log("Produk baru ditambahkan:", newProduct);
}

// Fungsi untuk mendapatkan produk secara acak dari database
async function getRandomProduct() {
  const count = await Product.countDocuments();
  const random = Math.floor(Math.random() * count);
  const product = await Product.findOne().skip(random);
  console.log("Produk acak yang diambil:", product);
}

// Jalankan fungsi
async function run() {
  await createRandomProduct(); // Menambahkan produk acak ke database
  await getRandomProduct(); // Mengambil produk acak dari database
  mongoose.connection.close();
}

run().catch((err) => console.error(err));
