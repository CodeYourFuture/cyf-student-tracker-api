
export const studentTracker = async (req, res) => {
  try {
    return res
      .status(200)
      .send([{ students: "student tracker data as an array" }]);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students");
  }
};
