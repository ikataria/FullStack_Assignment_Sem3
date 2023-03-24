const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const Employee = require('./models/employees');

// Empty db
// require('./test')();

const app = express();
app.use(express.static('./public'));
const PORT = 7000;

// MongoDb Connection Config
mongoose.connect('mongodb+srv://admin:admin@cluster0.gxzxfor.mongodb.net/EmployeeMgmtSystem?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(err, connected){
    if(err) console.log('Error in connection with the Database');
    else console.log("Application is connected to Database");
})

const typeDefs = `
    type employee {
        _id: ID!,
        Id: Int,
        FirstName: String,
        LastName: String,
        Age: Int,
        DateOfJoining: String,
        Title: String,
        Department: String,
        EmployeeType: String,
        CurrentStatus: Int
    }

    type Query {
        employeeDirectory: [employee],
        deleteRow(Id:String!): employee,
        getEmployeeById(Id:String):employee
    }

    type Mutation {
        addSingleEmployee(FirstName: String!, LastName:String, Age: Int, DateOfJoining: String, Title: String, Department: String, EmployeeType: String, CurrentStatus: Int) : employee,
        updateEmployee(Id:String,Title:String,Department:String,CurrentStatus:Int):String      

    }
`;


const resolvers = {
    Query: {
        employeeDirectory,
        deleteRow,
        getEmployeeById
    },

    Mutation: {
        addSingleEmployee,
        updateEmployee
    }
}

async function employeeDirectory(){
    return (await Employee.find());
}

async function addSingleEmployee(_,{FirstName, LastName, Age, DateOfJoining, Title, Department, EmployeeType, CurrentStatus}){

    let singleEmployee = {
        FirstName: FirstName,
        LastName:LastName,
        Age: Age,
        DateOfJoining: DateOfJoining,
        Title: Title,
        Department: Department,
        EmployeeType: EmployeeType,
        CurrentStatus: CurrentStatus
    }

    let cnt = await (Employee.find().count());
    singleEmployee.Id = cnt + 1;
    return await (Employee.create(singleEmployee));
}

async function deleteRow(_,{Id}){
    await Employee.findByIdAndRemove(Id);
    return "Deleted";
}

async function getEmployeeById(_,{Id}){
    return (await Employee.findById({_id: Id}));
}

async function updateEmployee(_,{Id,Title,Department,CurrentStatus}){
    await Employee.updateOne({_id:Id},
        { $set: {Title,Department,CurrentStatus} });
    return "Updated";
}

const server = new ApolloServer({
     typeDefs, 
     resolvers 
});

server.start()
    .then(()=>{
        server.applyMiddleware({app, path: '/graphql', cors: true});
    })

app.get('/', (req, res) => {
    res.render('index.html');
});
    
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));