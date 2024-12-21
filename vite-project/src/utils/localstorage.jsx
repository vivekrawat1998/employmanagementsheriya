const employee = [
  {
    "id": 1,
    "firstName": "Rohan",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Research market trends",
        "description": "Gather data on current market trends.",
        "date": "2024-12-06",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Plan marketing strategy",
        "description": "Develop a new strategy for product marketing.",
        "date": "2024-12-07",
        "category": "Planning",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Prepare sales pitch",
        "description": "Create a pitch deck for potential clients.",
        "date": "2024-12-08",
        "category": "Presentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Organize team workshop",
        "description": "Plan a skill development workshop for the team.",
        "date": "2024-12-09",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
,  
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design homepage",
        description: "Create mockups for the new website homepage.",
        date: "2024-12-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client presentation",
        description: "Prepare slides for the project review meeting.",
        date: "2024-12-10",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Update database",
        description: "Add new records to the client database.",
        date: "2024-12-07",
        category: "Database",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write documentation",
        description: "Update API documentation with latest changes.",
        date: "2024-12-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Conduct interview",
        description: "Interview candidates for the open developer role.",
        date: "2024-12-07",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Optimize performance",
        description: "Improve the loading time of the application.",
        date: "2024-12-08",
        category: "Performance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Schedule meeting",
        description: "Arrange a weekly sync-up with the team.",
        date: "2024-12-09",
        category: "Coordination",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Test features",
        description: "Run QA tests for the new product release.",
        date: "2024-12-10",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Create ads",
        description: "Design graphics for social media campaigns.",
        date: "2024-12-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Plan event",
        description: "Organize the end-of-year office party.",
        date: "2024-12-12",
        category: "Event",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];



const admin = [
  {
    id: 1,
    firstName:"vivek",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employee")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];

  return { employee, admin };
};