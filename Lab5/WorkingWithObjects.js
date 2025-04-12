const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  const module = {
    id: 1,
    title: "Working with Redux",
    description: "Making redux apps duh doi",
    course: "NodeJS Assignment",
  };
  
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
  
    app.get("/lab5/module", (req, res) => {
        res.json(module);
      });
    
    app.get("/lab5/module/title", (req, res) => {
      res.json(module.title);
    });
  
    app.get("/lab5/module/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      module.title = newTitle;
      res.json(module);
    });
  }
  