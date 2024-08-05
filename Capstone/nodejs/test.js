let dic = [];
let list = "test1";
let indexnumber = 0;
let newNum;

dic.push(
{
    x : list,
    y : indexnumber
});

indexnumber = indexnumber + 1;
console.log(dic)

dic.push(
    {
        x : list,
        y : indexnumber
});

indexnumber = indexnumber + 1;
dic.push(
    {
        x : list,
        y : indexnumber
});
console.log(dic)
console.log(dic.length)
