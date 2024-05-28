function leapyear(integerValue)
{


if (integerValue % 4 == 0) {
  

    if(integerValue%100==0)
    {
        if(integerValue%400==0)
        {
            console.log('leap year')
        }
        else
        {
            console.log('not a leap year')
        }

    }
    else
    {
        console.log('leap year')
    }

}
else {
    console.log('not a leap year');
}
}


leapyear(2012)
 
