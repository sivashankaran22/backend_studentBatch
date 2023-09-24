import { MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const mongoConnection = process.env.mongo_URL;

export async function dbConnection() {
   const client = new MongoClient (mongoConnection);
   await client.connect();
   console.log("mongoDb connected successfully");
   return client;
}

export const client = await dbConnection();