import {users} from '../../db/fakeData';
export const login = async (req, res) => {
 
  try {
    let myPost = req.body;
    let authenticated =  users.find(e => e.userName === myPost.userName);
    !authenticated ? res.json({success: false}): res.json({
      success: true,
      user: myPost.userName,
    });
    
    
  } catch (err) {
    console.log(err);
    return res.status(400).send("Invalid User");
  }
};
