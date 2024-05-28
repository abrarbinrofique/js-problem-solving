var number=[1,2,3,4,4,5,6,7,8,9,10]

let maxnum=number[0]

for(let i=0;i<number.length;i++)
    {
        if(maxnum<number[i])
            {
                maxnum=number[i]

            }
    }

    console.log(maxnum)