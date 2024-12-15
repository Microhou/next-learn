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

export async function PATCH(request: Request, { params }: IParams) {
    const data = await request.json();
    const { id } = params;
    let idx = -1;
    await db.update(({ posts }) => {
        idx = posts.findIndex((post) => post.id === id);
        posts[idx] = {
            ...posts[idx],
            ...data
        }
    })

    return NextResponse.json({
        code: 0,
        message: "updated success",
        data: db.data.posts[idx]
    })

}

// get ==> api/articles/:id
export async function GET(request: Request, { params }: IParams) {
    const { id } = params;
    const post = db.data.posts.find((post) => post.id === id);
    return NextResponse.json({
        code: 0,
        message: "success",
        data: post
    })
}