export function formatDate(date){
    let fDate;
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    if (month<10){
        month = "0"+month;
    }
    if (day<10){
        day = "0"+day;
    }
    fDate = year+"-"+month+"-"+day;
    return fDate;
}

export function formatTime(date){
    let fTime;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours<10){
        hours = "0"+hours;
    }
    if (minutes<10){
        minutes = "0"+minutes;
    }
    fTime = hours+":"+minutes;
    return fTime;
}

export function stringDate(date){
    let sDate;
    let iDate = new Date(date);
    let day = iDate.getDate();
    let month = iDate.getMonth()+1;
    let year = iDate.getFullYear();
    if (month<10){
        month = "0"+month;
    }
    if (day<10){
        day = "0"+day;
    }
    sDate = day+"."+month+"."+year;
    return sDate;
}

export function getCurShift(date){
    let curShift;
    let hours = date.getHours();
    if (hours>=20 | hours <8){
        curShift = 2;
    }else{
        curShift = 1;
    }        
    return curShift;
}