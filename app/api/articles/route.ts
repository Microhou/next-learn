import { NextResponse } from "next/server";
import  db  from "../../../db";

// GET ==> api/articles
export async function GET(request: Request) {
    // get 

}

export async function POST(request: Request) {
    try {
      const data = await request.json();
    //   console.log(data);
      await db.update(({ posts }) => posts.unshift({
        id: Math.random().toString(16).slice(-8),
        ...data,
      }))

      return NextResponse.json({
        code: 0,
        message: 'Article created',
        data,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        code: 500,
        message: 'Internal Server Error',
      });
    }
  }