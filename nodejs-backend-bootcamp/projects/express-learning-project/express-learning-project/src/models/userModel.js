// The "M" in MVC - handles data only. No knowledge of req/res.
// Using an in-memory array so the project runs with zero database setup.
let users = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com', age: 28 },
  { id: 2, name: 'Priya Verma', email: 'priya@example.com', age: 24 },
];
let nextId = 3;

const UserModel = {
  getAll: () => users,
  getById: (id) => users.find((u) => u.id === id),
  create: (data) => {
    const user = { id: nextId++, ...data };
    users.push(user);
    return user;
  },
  update: (id, data) => {
    const user = users.find((u) => u.id === id);
    if (!user) return null;
    Object.assign(user, data);
    return user;
  },
  remove: (id) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
};

module.exports = UserModel;
