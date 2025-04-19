import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Get all assignments
  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.json(assignments);
  });

  // Get a specific assignment by ID
  app.get("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const assignment = await dao.findAssignmentByIds(aid);
    if (!assignment) {
      res.status(404).send({ message: "Assignment not found" });
    } else {
      res.json(assignment);
    }
  });

  // Get all assignments for a course
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourses(cid);
    res.json(assignments);
  });

  // Create a new assignment for a course
  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignment = { ...req.body, course: cid };
    const newAssignment = await dao.createAssignments(assignment);
    res.json(newAssignment);
  });

  // Update an assignment
  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const assignmentUpdates = req.body;
    try {
      const updated = await dao.updateAssignments(aid, assignmentUpdates);
      res.json(updated);
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  });

  // Delete an assignment
  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    await dao.deleteAssignments(aid);
    res.sendStatus(204);
  });
}
