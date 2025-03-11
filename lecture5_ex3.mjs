import dayjs from "dayjs"


function Answer(response, username, score, date){
    this.response=response;
    this.username=username;
    this.score=score;
    this.date=date;
    this.greet= function(){
        console.log("hello");

    }
}

function Question(question, qUsername, qDate){
    this.question=question;
    this.qUsername=qUsername;
    this.qDate=qDate;
    this.answerList=[];
    this.add=function(ans){
        if(ans){
            this.answerList.push(ans);
            //console.log(ans,"succefully added")
        }
    }
    this.getAnswerList= function(){
        return this.answerList;
    };
    this.find=function(user){
        let tmp=[];
        for(let i=0;i<this.answerList.length;i++){
            if(this.answerList[i].username===user){
                tmp.push(this.answerList[i]);
            }
        }
        return tmp;
    };
    this.afterDate=function(date){

        // method1: if you don't use dayjs while storing the date

        /* let tmp=[];
        for(let i=0;i<this.answerList.length;i++){
            
            if(this.answerList[i].date>=date){
                tmp.push(this.answerList[i]);
            }
        }
        return tmp;  */

        // method2: if you use dayjs while storing the date
        
        let tmp=[];
        for(let i=0;i<this.answerList.length;i++){
        
            if(dayjs(date).isBefore(this.answerList[i].date)){ // careful:: don't forget to convert the date into dayjs here,
                tmp.push(this.answerList[i]);                   // don't convert it anywhere else it will error or null output
            }
        }
        return tmp;  

    };
    this.listByDates=function(){
        this.answerList.sort((a, b) => a.date - b.date);
    };
    this.listByScore=function(){
        this.answerList.sort((a, b) => b.score - a.score);
    }


}

const hey= new Answer("hey", "yo", 11, dayjs('2018-10-08'));
const q1= new Question("what","khushboo",dayjs().toDate());

q1.add(hey);
q1.add(new Answer("yo", "yo", 6, dayjs('2018-01-01')));
q1.add(new Answer("hi darling", "khushboo", 7, dayjs('2018-05-02')));
q1.add(new Answer("hi honey", "khushboo", 10, dayjs('2018-06-01')));

//console.log(q1.getAnswerList());

//***find method */
/* console.log(q1.find("khushboo")); */

//**** afterDate method */
//console.log(q1.afterDate('2018-05-01'));

//****listByDates method */
/* q1.listByDates();
console.log(q1.getAnswerList()); */

//****listbyscore method */

/* q1.listByScore();
console.log(q1.getAnswerList()); */

//console.log(q1)
