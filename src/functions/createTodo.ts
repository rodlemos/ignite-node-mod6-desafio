import { document } from "../utils/dynamodbClient";

interface ICreateTodo {
  id: string;
  user_id: string;
  title: string;
  deadline: Date; 
  done: boolean;
}

export const handle = async (event) => {
  const user_id = event.pathParameters;
  const { id, title, deadline, done } = JSON.parse(event.body) as ICreateTodo;

  await document.put({
    TableName: "users_todo",
    Item: {
      id, user_id, title, deadline, done
    }
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({message: "created"}),
    headers: {
      "Content-type": "application/json"
    }
  }
}