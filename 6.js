var friends=['rahim','karim','abdul','sadsd','heroalom']

let bigname=friends[0]

for(let i=0;i<friends.length;i++)
    {
        if(friends[i].length>bigname.length)
            {
                bigname=friends[i]
            }
    }

    console.log(bigname)