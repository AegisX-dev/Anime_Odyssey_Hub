// scripts/importData.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { Anime } = require('../src/models'); // Import from index

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    const dataPath = path.resolve(__dirname, '..', 'anime_data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    await Anime.deleteMany({});
    await Anime.insertMany(data);
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();