function moneysavings(arra,number)
{
    if(Array.isArray(arra)==true || isNaN(number)==false )

        {

    let total=0
    for(let i=0;i<arra.length;i++)
        {
            let n=0;
            if(arra[i]>=3000)
                {
                     n=arra[i]-arra[i]/5
                     total=total+n
                }
                else
                {
                  total=total+arra[i]
                }
        }

        let bal=total-number
        if(bal<0)
            {
                console.log(' "earn more" ')

            }
        else
        {
            console.log(bal)
        }

    }
    else
    {
        console.log("Invalid Input")
    }


  

}

moneysavings([1000,2000,3000],5400)

moneysavings([1000,2000,2500],5000)

moneysavings([900,2700,3400],10000)

moneysavings(100,[900,2700,3400])