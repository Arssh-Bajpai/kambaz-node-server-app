import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function createModule(module) {
  const newModule = { ...module, _id: uuidv4() };
  return model.create(newModule);
}
   
export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}
   
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}

export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId);
}
  
  