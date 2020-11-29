import {
  classAttendanceArray, 
  studentProfile, 
  pdSkillsPostData, 
  edu,
  data, 
  pdData, 
  studentDD,
  eduData,
  studentData
} from '../../db/fakeData';

export const studentTracker = async (req, res) => {
  try {
    return res.status(200).send(studentData);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students");
  }
};

export const getClassAttendanceData = async (req, res) => {
  try {
   res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students");
  }
};

export const getStudentProfile = async (req, res) => {
  try {
    let profileQuery = req.params.profile_id;
    let filteredProfile = studentProfile.find(el => el.profile == profileQuery);
    filteredProfile ?  res.status(200).send(filteredProfile) : res.json({success: false});
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get student with id:" + profileQuery );
  }
};


export const postClassAttendanceData = async (req, res) => {
  try {
    let classAttendancePost = req.body;
    let indexNum = classAttendancePost.profile;
    classAttendanceArray.push(classAttendancePost);
    studentProfile[indexNum - 1].classAttendance.JavaScript_1.week1 = classAttendanceArray[indexNum -1].attended;
    //let classPoint = studentProfile[indexNum - 1].classAttendance.JavaScript_1.week1;
    res.status(200).json(studentProfile[indexNum - 1].classAttendance);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students");
  }
};

export const getPdSkills = async (req, res) => {
  try {
    res.json(pdData);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students Pd skills data");
  }
};

export const postPdSkills = async (req, res) => {
  try {
    let pdPostBody = req.body;
    !pdPostBody.profile ? res.send('invalid data schema, need to add profile within POST!') : (pdSkillsPostData.push(pdPostBody), res.status(200).json(pdPostBody));
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get students Pd skills data");
  }
};

export const getStudentEduHomework = async (req, res) => {
  try {
   res.json(eduData);
  } catch (error) {
    res.status(400).send("Error getting updated Educational Homework");
  }
};

export const postEduHomework = async (req, res) => {
  try {
    let myEduPost = req.body;
    let indexNum = myEduPost.profile;
    edu.push(myEduPost);
    studentProfile[indexNum - 1].eduHomework.JavaScript_1.week1 = edu[indexNum -1].score;
    res.status(200).json(studentProfile[indexNum - 1].eduHomework);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not post educational homework for student");
  }
};

export const getUpdatedStudentProfile = async (req, res) => {
  try {
    res.json(studentDD);
  } catch (error) {
    res.status(400).send("Error creating student profile!");
  }
}; 

