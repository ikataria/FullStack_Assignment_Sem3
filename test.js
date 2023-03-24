const dbEmp = require('./server/models/employees');


module.exports = async() => {

    console.log(`yah aaya`);
    await dbEmp.deleteMany({});
    console.log(`Data deleted`);


    // const selectedDate = new Date("1818-12-01");
    // const today = new Date(new Date().setYear(new Date().getYear() - 30));
    

    // console.log('selectedDate:',selectedDate);
    // console.log('today:',today);

    // if(selectedDate < today){
    //     console.log('Invalid');
    // }else{
    //     console.log("Valid");
    // }
}
