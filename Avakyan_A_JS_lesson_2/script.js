let Obj = {
    name: "Alex",
    age: "19",
    skill:{
        JS: null,
        Html:NaN,
        Company:{
            Work:undefined,
        },
    },
}
    let empty = {};
    function makeObjectDeepCopy(empty,Obj) {
    
    for(key in Obj) {
        if((typeof Obj[key] !== "object") || (Obj[key] === null) || (Obj[key] === undefined) || (Obj[key] === NaN)) { 
        empty[key] = Obj[key]; 
        }else{
            empty[key] = {}; 
            return makeObjectDeepCopy(empty[key],Obj[key]); 
        }
    }
    }
    makeObjectDeepCopy(empty,Obj)
    empty.skill.Company.Work = 4;
    




    let interval = [[4,6,5], 4, 5];
    var result = [];    
    var New = [];
    function  selectFromInterval(New,interval){
        if (typeof interval[0] ==='object' & typeof interval[1] ==='number' & typeof interval[2] ==='number'){
            let nums = interval[0];  

            for(key in nums){
                if((isNaN(key)) || (typeof interval[1] !== 'number') || (typeof interval[2] !== 'number')){throw new Error('error message');
                }    

                if (interval[2] > interval[1]){
                  New = interval[0].filter(function(number) {
                        return number >= interval[1], number <= interval[2];
                    });
                }else{
                  New = interval[0].filter(function(number) {
                        return number >= interval[2], number <= interval[1]
                    });  
                }
                }
            }
           result = New;
    } 
    selectFromInterval(New,interval);
    // console.log(result); 
        



   const myIterable = {
        from: 3,
        to: 10,
    }

    myIterable[Symbol.iterator]= function(){
        return {
            current:this.from,
            last: this.to,
            next(){
                if (this.current <= this.last){
                    return {done: false, value: this.current++};
                } else{
                    return {done:true};
                }
            }
        }
    }

var values = Object.values(myIterable);

if ((typeof values[0] !=='number') || (typeof values[1] !=='number') || (values[1]<values[0])){
    throw new Error('error message');
    }else{
        for (let num of myIterable) {
            console.log(num);
          }
    }


