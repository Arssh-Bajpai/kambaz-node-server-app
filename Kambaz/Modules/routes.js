import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
      });
     
      app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
      });
     
      app.get("/api/courses/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const modules = modulesDao.findModulesForCourse(courseId);
        res.json(modules);
      });
    
   }
   