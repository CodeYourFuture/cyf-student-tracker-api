export const users = [
    {
        userName: "lola",
        pass: "cyf"
    },
    {
        userName: "ekip",
        pass: "cyf"
    },
    {
        userName: "denis",
        pass: "cyf"
    }
]
 export const studentProfile = [
  
    {
        profile: 1,
        studentInfo: {
              name: "Ekip",
              location: "Birmingham",
              email: "ekip123@yahoo.com",
              phone: "07771112223",
              slackId: "Ekip321"
  
      },
       overview: {
          homeworkPerformance: [1,2,3,4,5,6,7,8,9,10],
          homeworkMissing: [1,2,3,4,5,6,7,8,9,10],
          classessAttended: [1,2,3,4,5,6,7,8,9,10],
          classessLate: [1,2,3,4,5,6,7,8,9,10]
        },
      eduHomework: {
         javascript1: {
           week1: null,
           week2: null,
           week3: null
         },
         javascript2: {
          week1: null,
          week2: null,
          week3: null
        },
        javascript3: {
          week1: null,
          week2: null,
          week3: null
        },
        studentScore: 0
      },

      
      classAttendance: {
        javascript1: {
          week1: null,
          week2: null,
          week3: null
        },
        javascript2: {
         week1: null,
         week2: null,
         week3: null
       },
       javascript3: {
         week1: null,
         week2: null,
         week3: null
       },
         
     
      }
    },

    {
      profile: 2,
      studentInfo: {
            name: "lola",
            location: "Birmingham",
            email: "lola123@yahoo.com",
            phone: "07771112223",
            slackId: "lola321"

    },
     overview: {
        homeworkPerformance: [1,2,3,4,5,6,7,8,9,10],
        homeworkMissing: [1,2,3,4,5,6,7,8,9,10],
        classessAttended: [1,2,3,4,5,6,7,8,9,10],
        classessLate: [1,2,3,4,5,6,7,8,9,10]
      },
    eduHomework: {
       javascript1: {
         week1: null,
         week2: null,
         week3: null
       },
       javascript2: {
        week1: null,
        week2: null,
        week3: null
      },
      javascript3: {
        week1: null,
        week2: null,
        week3: null
      },
      studentScore: 0
    },

    
    classAttendance: {
      javascript1: {
        week1: null,
        week2: null,
        week3: null
      },
      javascript2: {
       week1: null,
       week2: null,
       week3: null
     },
     javascript3: {
       week1: null,
       week2: null,
       week3: null
     },
       
     attended: {
      0: 'yes', 
      1: 'no', 
      2: 'late'
  }
      },
    pdSkills: {
        skill: {
          0: "motivation", 
          1: "communication", 
          2:"confidence"
        },
        skillLevel: {
          0: "Excellent", 
          1: "Very good", 
          2: "Average", 
          3: "Below Average", 
          4: "Poor"
        }
    }
  },

  {
    profile: 3,
    studentInfo: {
          name: "denis",
          location: "Birmingham",
          email: "denis123@yahoo.com",
          phone: "07771112223",
          slackId: "denis321"

  },
   overview: {
      homeworkPerformance: [1,2,3,4,5,6,7,8,9,10],
      homeworkMissing: [1,2,3,4,5,6,7,8,9,10],
      classessAttended: [1,2,3,4,5,6,7,8,9,10],
      classessLate: [1,2,3,4,5,6,7,8,9,10]
    },
  eduHomework: {
     javascript1: {
       week1: null,
       week2: null,
       week3: null
     },
     javascript2: {
      week1: null,
      week2: null,
      week3: null
    },
    javascript3: {
      week1: null,
      week2: null,
      week3: null
    }
   
  },

  
  classAttendance: {
    javascript1: {
      week1: null,
      week2: null,
      week3: null
    },
    javascript2: {
     week1: null,
     week2: null,
     week3: null
   },
   javascript3: {
     week1: null,
     week2: null,
     week3: null
   },
     
   attended: {
    0: 'yes', 
    1: 'no', 
    2: 'late'
}
    },

   
  pdSkills: {
      skill: ["motivation", "communication", "confidence"],
      skillLevel: ["Excellent", "Very good", "Average", "Below Average", "Poor"]
  }
}
    
    
  ]
  //route for /student-tracker
   export const studentProgressTracker = [

    {
          overview: {
            homeworkPerformance: [1,2,3,4,5,6,7,8,9,10],
            homeworkMissing: [1,2,3,4,5,6,7,8,9,10],
            classessAttended: [1,2,3,4,5,6,7,8,9,10],
            classessLate: [1,2,3,4,5,6,7,8,9,10]
          }
      },
      {
          eduHomework: {
            javascript1: {
              week1: null,
              week2: null,
              week3: null
            },
            javascript2: {
             week1: null,
             week2: null,
             week3: null
           },
           javascript3: {
             week1: null,
             week2: null,
             week3: null
           },
           studentScore: 0
        }
      },
      {
          pdSkills: {
            skill: ["motivation", "communication", "confidence"],
            skillLevel: ["Excellent", "Very good", "Average", "Below Average", "Poor"]
        }
      },
      
      {
          classAttendance: {
            javascript1: {
              week1: null,
              week2: null,
              week3: null
            },
            javascript2: {
             week1: null,
             week2: null,
             week3: null
           },
           javascript3: {
             week1: null,
             week2: null,
             week3: null
           },
             
            attended: {
              0: 'yes', 
              1: 'no', 
              2: 'late'
          }
          }
      },
      
      
      {laptop: "laptop details here"}

    
  ];
  


 