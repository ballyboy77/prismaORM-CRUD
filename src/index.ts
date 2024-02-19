// PRISMA

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertUsers(username:string,password:string) {
    
    const res = await prisma.users.create({
        data: {
            username,
            password
            
        }
    })
    console.log(res)
}

const findUsers =async  (id:number) => {
    try {
   const res =await prisma.users.findUnique({
        where: {id},
        select: {
            firstName:true,
            lastName:true
        }
    })
    console.log(res)
}
catch{
    console.log('unable to find users')    

}

}

interface updateParams {
    firstName: string,
    lastName: string

}


async function updateUser(id:number, {
    firstName,
    lastName
}:updateParams) {
    const res = await prisma.users.update({
        where: { 
            id,
        },
        data: {
            firstName,
            lastName
        },
        select: {
            firstName:true,
            lastName:true,
            id:true
        }
    })

    console.log(res)
    
}

async function delUsers(id:number) {
    const r = await prisma.users.delete({
        where: {
            id,
        },
        

    })
    
}
// delUsers(2);

insertUsers('user1','user12345')



