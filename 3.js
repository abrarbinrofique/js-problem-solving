arra=[1,2,8,3,7,19,15,13,5,20,12,11,4,10,14,18,6,9,16,17]

for (let i=0;i<arra.length-1;i++)
    {
        let m=arra[i]
        

        for (let j=i+1;j<arra.length;j++)
            {
                if(arra[j]<m)
                    {
                        m=arra[j]
                        let n=arra[i]
                        arra[i]=arra[j]
                        arra[j]=n


                    }

            }
            
            

      
    }

    console.log(arra)