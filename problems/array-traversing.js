const data = [
  {
    id: 1,
    name: "John Doe",
    role: "developer",
    projects: [
      {
        name: "Project Alpha",
        technologies: ["JavaScript", "React", "Node.js"],
        status: "completed",
      },
      {
        name: "Project Beta",
        technologies: ["Python", "Django", "PostgreSQL"],
        status: "in progress",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "designer",
    projects: [
      {
        name: "Project Gamma",
        technologies: ["Figma", "Sketch"],
        status: "completed",
      },
      {
        name: "Project Delta",
        technologies: ["Adobe XD", "Illustrator"],
        status: "in progress",
      },
    ],
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "manager",
    projects: [
      {
        name: "Project Epsilon",
        technologies: ["Jira", "Confluence"],
        status: "completed",
      },
      {
        name: "Project Zeta",
        technologies: ["Slack", "Trello"],
        status: "in progress",
      },
    ],
  },
];

let list = [];
function usingMap(arr) {
  arr.map((item, i) => {
    list.push({
      name: item.name,
      role: item.role,
      projects: item.projects.map((prj) => prj.name),
    });
  });
  return list;
}
function usingloop() {
  for (let i = 0; i < data.length; i++) {
    list.push({
      name: data[i].name,
      role: data[i].role,
    });
    for (let j = 0; j < data[i].projects.length; j++) {
      list.push({ projects: data[i]?.projects[j].name });
    }
  }
  return list;
}

// console.log("result is:", usingMap(data));
console.log("result is:", usingloop(data));
