import mongoose from "mongoose";

const connectMongoDB = async (dbUrl) => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(dbUrl, options);
    console.log("✅ ket noi mongodb thanh cong");
  } catch (error) {
    console.error("❌ ket noi mongodb that bai", error);
    process.exit(1);
  }
};

export default connectMongoDB;
