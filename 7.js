var number=[1,2,3,4,4,5,6,7,8,9,10]

uniq_number=[]

for(let i=0;i<number.length;i++)
    {
        let l=number[i]
        exist=false

        for(let j=0;j<number.length;j++)
            {
                if(l==uniq_number[j])
                    {
                        exist=true;
                    }
            }
            if(exist==false)
                {
                    uniq_number.push(l)
                }
    }

    console.log(uni)