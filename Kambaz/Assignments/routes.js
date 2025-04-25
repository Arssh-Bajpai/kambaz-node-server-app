import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

  const findAssignmentsForCourse = async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  };
  app.get("/api/courses/:cid/assignments", findAssignmentsForCourse);

  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignment = {...req.body, course: cid,};
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  });

  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(aid, assignmentUpdates);
    res.send(status);
  });

  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    res.send(status);
  });
  
  app.get("/api/assignments/:aid", async (req, res) => {
    const assignment = await dao.findAssignmentById(req.params.aid);
    res.json(assignment);
  });
  
}