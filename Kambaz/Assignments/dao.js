
import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
  return model.create({ ...assignment, _id: uuidv4() });
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, updates) {
  return model.updateOne({ _id: assignmentId }, { $set: updates });
}

export function findAssignmentById(aid) {
  return model.findOne({ _id: aid });
}