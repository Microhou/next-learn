import { NextResponse } from "next/server";
import db  from "@/db";

interface IParams {
    params: {
        id: string;
    }
}
// Delete ==> api/articles/:id
export async function DELETE(request: Request, { params }: IParams) {
    // const data = await request.json();
    const { id } = params;
    
    await db.update(({ posts }) => {
       const idx = posts.findIndex((post) => post.id === id)
        posts.splice(idx, 1)
    });
    return NextResponse.json({
        code: 0,
        message: "deleted success"
    })
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    
}

// get ==> api/articles/:id
export async function GET(request: Request, { params }: { params: { id: string } }) {
    
}