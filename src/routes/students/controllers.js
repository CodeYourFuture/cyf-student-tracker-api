import {studentProfile, studentProgressTracker, pdSkillsPostData} from '../../db/fakeData';
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

export const postPdSkills = async (req, res) => {
  try {
    let myPdPost = req.body;
    !myPdPost.profile ? res.send('invalid data schema, need to add profile within POST!') : (pdSkillsPostData.push(myPdPost), res.status(200).json(myPdPost));
    
    
   
  
    
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students Pd skills data");
  }
};