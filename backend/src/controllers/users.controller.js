const usersController = {};

usersController.getUsers = (req, res) => res.json({ message: "GET users" });

usersController.createUser = (req, res) => res.json({ message: "CREATE user" });

usersController.getUser = (req, res) => res.json({ message: "GET user" });

usersController.updateUser = (req, res) => res.json({ message: "UPDATE user" });

usersController.deleteUser = (req, res) => res.json({ message: "DELETE user" });

module.exports = usersController;
