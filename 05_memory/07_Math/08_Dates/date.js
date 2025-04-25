let myDate =new Date()
    console.log(myDate.toString());
    console.log(myDate.toDateString());
    console.log(myDate.toLocaleString());
    console.log(typeof myDate);

    let myCreatedDate=new Date(2025,0,23);
    console.log(myCreatedDate.toDateString());
    console.log(myCreatedDate.toLocaleString());//date time value

    //dd/mm/yy

    let myCreatedDate1=new Date("2025-01-23");
    console.log(myCreatedDate1.toLocaleString());

    //Time Stamp

    let myTimeStamp=Date.now();
    console.log(myTimeStamp);
    console.log(myCreatedDate.getTime());//milli-seconds

    //convert into seconds
    console.log(Math.floor(Date.now()/1000));


    let newDatee=new Date();
    
    console.log(newDatee);
    console.log(newDatee.getMonth()+1);
    console.log(newDatee.getDay());

    //`${newDatee.getDay()} and the time is`


    //Important

    newDatee.toLocaleString ('default',{
        weekday:"long",
    })



