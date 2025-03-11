import dayjs from 'dayjs';


const date = dayjs('2024-10-08');
console.log(date);


const date1 = dayjs('2024-10-08');
const date2 = dayjs('2023-10-08');

console.log(date1.isAfter(date2)); 
console.log(date1.isBefore(date2));  
console.log(date1.isSame('2024-10-08')); 