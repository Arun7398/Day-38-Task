//users

db.users.insert Many([

    {
        userid : 1,
        name : "Arun Kumar"
        email :"arun01023@gmail.com",
        batch : "weekday"
    },

    {
        userid : 2,
        name : "Arun Praveen"
        email :"arun23@gmail.com",
        batch : "weekday"
    },

    {
        userid : 3,
        name : "Jayavel Anand"
        email :"jayavel01@gmail.com",
        batch : "weekend"
    },

    {
        userid : 4,
        name : "Ragavendran"
        email :"ragavendran002@gmail.com",
        batch : "weekend"
    },

    {
        userid : 5,
        name : "Tamil Selvan"
        email :"tamil012@gmail.com",
        batch : "weekday"
    },

]);

//codekata

db.codekata.insertMany([

    {
        userid : 1,
        solved : 107
    } ,

    {
        userid : 2,
        solved : 117
    } ,

    {
        userid : 1,
        solved : 102
    } ,

    {
        userid : 1,
        solved : 105
    } ,

    {
        userid : 1,
        solved : 110
    } ,

]);

//attendence

db.attendence.insertMany([

    {
        userid : 1,
        percentage : 85
    },

    {
        userid : 2,
        percentage : 87
    },

    {
        userid : 3,
        percentage : 80
    },

    {
        userid : 4,
        percentage : 82
    },

    {
        userid : 5,
        percentage : 88
    },

])

//topics

db.topics.insertMany([

    {
        userid : 1,
        topic : "html"
        date : "10.10.2022"
    },

    {
        userid : 2,
        topic : "css"
        date : "15.10.2022"
    },

    {
        userid : 3,
        topic : "javascript"
        date : "17.10.2022"
    },

    {
        userid : 4,
        topic : "react"
        date : "10.10.2022"
    },

    {
        userid : 5,
        topic : "nodejs"
        date : "20.10.2022"
    },

]),

//tasks

db.tasks.insertMany([

    {
        userid : 1,
        taskid : 1,
        sumitted : "20.10.2022"
    },

    {
        userid : 2,
        taskid : 2,
        sumitted : "27.10.2022"
    },

    {
        userid : 3,
        taskid : 3,
        sumitted : "10.11.2022"
    },

    {
        userid : 4,
        taskid : 4,
        sumitted : "22.10.2022"
    },

    {
        userid : 5,
        taskid : 5,
        sumitted : "30.10.2022"
    },

]),

//company drives

db.companydrives.insertMany([

    {
       userid : 1,
       company : "zoho" 
    },

    {
        userid : 2,
        company : "zoho" 
     },

     {
        userid : 3,
        company : "zoho" 
     },

     {
        userid : 4,
        company : "HCL" 
     },

     {
        userid : 5,
        company : "HCL" 
     },

]),

//mentors

db.mentors.insertMany([

    {
       userid : 1,
       mentor : "sanjay"
    },

    {
        userid : 2,
        mentor : "sanjay"
     },

     {
        userid : 3,
        mentor : "sanjay"
     },

     {
        userid : 4,
        mentor : "sanjay"
     },

     {
        userid : 5,
        mentor : "sanjay"
     },

]),





//find all topics and task which are taught in month of october


db.topics.aggregate([

    {
        $lookup : {
           from : "tasks"
           localField : "taskid"
           foreignField : "taskid"
           as : "task"
        },
    },

    {
        $match:{
            $and:[
                {
                    $or:[
                        {"task_date":{$gt:(01.10.2022)}}
                        {"task_date":{$lt:(31.10.2022)}}
                    ],
                },
            ],
        },
    },
]),




























































































































































































