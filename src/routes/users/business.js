import UserContext from "./contexts";

const getUser = async (userId) => {
  try {
    const user = await UserContext.findOneBy({ _id: userId });
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

const getUsers = async () => {
  try {
    const users = await UserContext.findAll();
    return users;
  } catch (err) {
    throw new Error(err);
  }
};

const updateUser = async (userId, userData) => {
  try {
    const user = await UserContext.findOneAndUpdate({ _id: userId }, userData);
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteUser = async (userId) => {
  try {
    const response = UserContext.hardDelete({ _id: userId });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export default {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
