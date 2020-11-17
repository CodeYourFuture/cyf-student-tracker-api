import {studentProfile, studentProgressTracker} from '../../db/fakeData';
export const studentTracker = async (req, res) => {
  try {
    return res
      .status(200)
      .send(studentProgressTracker);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students");
  }
};

export const getStudentProfile = async (req, res) => {
  try {
    let profileQuery = req.params.profile_id;
    let filteredProfile = studentProfile.find(el => el.profile == profileQuery);
    filteredProfile ?  res
    .status(200)
    .send(filteredProfile) : res.json({success: false});
  
    
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students");
  }
};
