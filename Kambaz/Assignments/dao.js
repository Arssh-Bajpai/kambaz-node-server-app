import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

// Get all assignments
export function findAllAssignments() {
  return model.find();
}

// Get assignments for a specific course
export function findAssignmentsForCourses(courseId) {
  return model.find({ course: courseId });
}

// Get a specific assignment by ID
export function findAssignmentByIds(assignmentId) {
  return model.findOne({ _id: assignmentId });
}

// Create a new assignment
export function createAssignments(assignment) {
  return model.create({ ...assignment, _id: uuidv4() });
}

// Update an assignment
export async function updateAssignments(assignmentId, updates) {
  if (!assignmentId) {
    throw new Error("Assignment ID is required for update");
  }

  const result = await model.updateOne({ _id: assignmentId }, { $set: updates });

  if (result.matchedCount === 0) {
    throw new Error(`Assignment with ID ${assignmentId} not found`);
  }

  return model.findOne({ _id: assignmentId });
}

// Delete an assignment
export function deleteAssignments(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}
