import {users} from '../../db/fakeData';
export const login = async (req, res) => {
 
  try {
    let postBody = req.body;
    let authenticated =  users.find(e => e.userName === postBody.userName);
    !authenticated ? res.json({success: false}): res.json({
      success: true,
      user: postBody.userName,
      class: {
        class1: "West Midlandss class 1",
        class2: "West Midlandss class 2",
        class3: "West Midlandss class 3"
      }
    });
    
    
  } catch (err) {
    console.log(err);
    return res.status(400).send("Invalid User");
  }
};
