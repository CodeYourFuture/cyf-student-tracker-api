export const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    return res.status(200).send({ user: "user data" });
    
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get user");
  }
};
