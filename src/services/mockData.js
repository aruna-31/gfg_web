export const mockUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Frontend Developer", skills: ["React", "Tailwind", "UI/UX"] },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"] },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", role: "Design Lead", skills: ["Figma", "Illustrator", "Branding"] },
    { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Project Manager", skills: ["Agile", "Scrum", "Leadership"] }
];

export const mockTasks = [
    { id: 101, title: "Design Landing Page", description: "Create a modern landing page following GFG brand guidelines.", assigneeId: 3, deadline: "2026-03-10", status: "Completed" },
    { id: 102, title: "Implement Authentication", description: "Setup login and signup flows with mock server.", assigneeId: 2, deadline: "2026-03-12", status: "In Progress" },
    { id: 103, title: "Build Dashboard Layout", description: "Sidebar and Navbar implementation with responsive design.", assigneeId: 1, deadline: "2026-03-15", status: "Pending" },
    { id: 104, title: "Task Management Logic", description: "Create forms to add, update, and manage tasks.", assigneeId: 1, deadline: "2026-03-18", status: "Pending" }
];

export const mockStats = {
    totalMembers: 12,
    totalTasks: 45,
    completedTasks: 32,
    pendingTasks: 13
};
