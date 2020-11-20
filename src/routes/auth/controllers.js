import {users} from '../../db/fakeData';
export const login = async (req, res) => {
 
  try {
    let postBody = req.body;
    let authenticated =  users.find(e => e.userName === postBody.userName);
    !authenticated ? res.json({success: false}): res.json({
      success: true,
      user: postBody.userName,
    });
    
    
  } catch (err) {
    console.log(err);
    return res.status(400).send("Invalid User");
  }
};
