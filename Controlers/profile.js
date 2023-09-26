import { client} from "../db.js";

// adding students
export async function postStudent (data){
    const database = client.db('BatchDetails');
    const collection = database.collection('Students');
    const result = await collection.insertMany(data);
    return result;
}
// adding mentor
export async function postMentor (data){
    const database = client.db('BatchDetails');
    const collection = database.collection('Mentor');
    const result1 = await collection.insertMany(data);
    return result1;
}
// matching student and mentor
export function getMatch(req){
    return client
    .db('BatchDetails')
    .collection('Mentor')
    .aggregate([
        {
            $lookup: {
              from: "Students",
              localField: "batch",
              foreignField: "batch",
              as: "batchInfo"
            }
          }
        ])
    .toArray();
  
}

// update the student details

export function PutStudent(curentStudent,updateStudent){
    const database = client.db('BatchDetails')
    const collection = database.collection('Students')
    const result3 = collection.updateOne({name:curentStudent},{$set:updateStudent},{includeResultMetadata: false})
    return result3;
}
