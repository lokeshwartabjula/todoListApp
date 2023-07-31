import api from "./api";

export const getTodos = (email) => {
  return api.post("/todoHome", { email });
};

export const getTodoById = (id) => {
  return api.post("/todoDetails", { id });
};

export const deleteTodo = (id) => {
  return api.post("/todoDelete", {  id  });
};

export const CreateNewTodo = (todoDetails) => {
  return api.post("/todoCreate", todoDetails);
};

export const updateTodo = (todoDetails) => {
  return api.post("/todoUpdate", todoDetails);
};

export const assignTodo = (todoId, friendEmail) => {
  return api.post("/todoAssign", { todoId, friendEmail });
};

export const remindFriend = (todoId, friendEmail) => {
  return api.post("todo/reminder", { todoId, friendEmail });
};
