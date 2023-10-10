import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
 
// insert singke data
// export async function POST(){
//     try{
//      const prisma = new PrismaClient();

//     let result = await prisma.brands.create({
//         data:
            
//             { brandName:"Apple", brandImg:"Apple.jpg" }
       
//      });
//         return NextResponse.json({ status: 'Success' });
//     }catch(err){
//         return NextResponse.json({status:"Fail" , data:err});
//     }
// }

// insert multiple data
// export async function POST(){
//     try{
//      const prisma = new PrismaClient();

//     let result = await prisma.brands.createMany({
//         data:[

//             { brandName:"Apple1", brandImg:"Apple1.jpg" },
//             { brandName:"Apple2", brandImg:"Apple2.jpg" },
//             { brandName:"Apple3", brandImg:"Apple3.jpg" }
//         ]
            
       
//      });
//         return NextResponse.json({ status: 'Success'});
//     }catch(err){
//         return NextResponse.json({status:"Fail" , data:err});
//     }
// }

// find many query

// export async function POST(){
//     try{
//      const prisma = new PrismaClient();

//     let result = await prisma.brands.findMany();
//         return NextResponse.json({result});
//     }catch(err){
//         return NextResponse.json({status:"Fail" , data:err});
//     }
// }


// //update query
// export async function PUT(){
//     try{
//      const prisma = new PrismaClient();

//     let result = await prisma.brands.update({
//         where:{id:30},
//        data: { brandName:"Update", brandImg:"Update.jpg" }
//     });
//         return NextResponse.json({status:"Success"});
//     }catch(err){
//         return NextResponse.json({status:"Fail" , data:err});
//     }
// }



//delete query
// export async function DELETE(){
//     try{
//      const prisma = new PrismaClient();

//     let result = await prisma.brands.delete({
//         where:{id:29}
      
//     });
//         return NextResponse.json({status:"Success"});
//     }catch(err){
//         return NextResponse.json({status:"Fail" , data:err});
//     }
// }


// find unique data
// export async function GET(){
//     try{
//      const prisma = new PrismaClient();

//     let result = await prisma.brands.findUnique({
//         where:{id:30}
      
//     });
//         return NextResponse.json({status:"Success"});
//     }catch(err){
//         return NextResponse.json({status:"Fail" , data:err});
//     }
// }

// find many data
const prisma = new PrismaClient();
export async function GET(){
    try{

    let result = await prisma.brands.findMany({
        select:{
            brandName:true
        },
        where : {
            id:30
        }
      
    });
        return NextResponse.json({status:"Success" , data:result});
    }catch(err){
        return NextResponse.json({status:"Fail" , data:err});
    }
}

