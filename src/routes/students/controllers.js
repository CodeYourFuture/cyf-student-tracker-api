import {classAttendanceArray, studentProfile, studentProgressTracker, eduHomeworkData} from '../../db/fakeData';

export const studentTracker = async (req, res) => {
  try {
    return res
      .status(200)
      .send(studentProfile);
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


export const postClassAttendanceData = async (req, res) => {
  try {
    let classAttendancePost = req.body;
    classAttendanceArray.push(classAttendancePost);
    res.json(classAttendancePost);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students");
  }
};

export const postPdSkills = async (req, res) => {
  try {
    let pdPostBody = req.body;
    !pdPostBody.profile ? res.send('invalid data schema, need to add profile within POST!') : (pdSkillsPostData.push(pdPostBody), res.status(200).json(myPdPost));
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students Pd skills data");
  }
};

export const postStudentEduHomework = async (req, res) => {
  try {
    const eduHomeworkBody = req.body;
    const findProfile = studentProfile.findIndex(
      (profile) => profile.profile == eduHomeworkBody.studentId
    );

    studentProfile[findProfile].eduHomework = eduHomeworkBody.eduHomework;
    console.log(eduHomeworkBody);

    eduHomeworkBody
      ? (eduHomeworkData.push(eduHomeworkBody),
        res.status(200).json(eduHomeworkBody))
      : res.send("Add student's educational homework");
  } catch (error) {
    res.status(400).send("Error adding homework!");
  }
};

export const postNewStudentProfile = async (req, res) => {
  try {
    const newStudentProfileBody = req.body;

    newStudentProfileBody
      ? (studentProfile.push(newStudentProfileBody),
        res.status(200).json(newStudentProfileBody))
      : res.send("Please add new student's profile!");
  } catch (error) {
    res.status(400).send("Error creating student profile!");
  }
}; 

export const getUpdatedStudentProfile = async (req, res) => {
  try {
    res.json(studentProfile);
  } catch (error) {
    res.status(400).send("Error creating student profile!");
  }
}; 

export const postUpdatedEduHomeworkData = async (req, res) => {
  try {
    const updatedEduHomework = req.body;
    if (updatedEduHomework) {
      eduHomeworkData.push(updatedEduHomework);
      res.status(200).json(updatedEduHomework);
    } else {
      res.send("No new data in Educational Homework object; nothing to update!");
    }
  } catch (error) {
    res.status(400).send("Error getting updated Educational Homework");
  }
};