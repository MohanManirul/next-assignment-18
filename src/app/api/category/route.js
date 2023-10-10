import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
 

// find many query

export async function GET(){
    try{
        const prisma = new PrismaClient();
        
        let result = await prisma.category.findMany();
        return NextResponse.json({status:"success"});
    }catch(err){
        return NextResponse.json({status:"Fail" , data:err});
    }
}


//insert single data
export async function POST(req , res){
    try{
        const prisma = new PrismaClient();
        const reqData = await req.json();
    let result = await prisma.category.create(
                
        {
            data: reqData
        }
        
        )

        return NextResponse.json({ status: 'Success' });
    }catch(err){
        return NextResponse.json({status:"Fail" , data:err});
    }
}

// //update query
export async function PUT(){
    try{
     const prisma = new PrismaClient();

    let result = await prisma.category.update({
        where:{id:1},
       data: { 
        title:"Electronics Update",
        metaTitle:"electronics-update",
        
        }
    });
        return NextResponse.json({status:"Success"});
    }catch(err){
        return NextResponse.json({status:"Fail" , data:err});
    }
}


 
//delete query
export async function DELETE(){
    try{
     const prisma = new PrismaClient();

    let result = await prisma.category.delete({
        where:{id:6}
      
    });
        return NextResponse.json({status:"Success"});
    }catch(err){
        return NextResponse.json({status:"Fail" , data:err});
    }
}





