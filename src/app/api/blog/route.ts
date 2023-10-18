import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

// 全記事取得
export async function GET( req: Request, { params }: any ) {
  const { data, error } = await supabase.from("posts").select("*")
  if (error) {
    return NextResponse.json(error)
  }
  return NextResponse.json(data, { status: 200 })
}

// 記事作成
export async function POST( req: Request, { params }: any ) {
  const { id, title, content } = await req.json()
  const { data, error } = await supabase
  .from("posts")
  .insert([{ id, title, content, createdAt: new Date().toISOString() }])
  if (error) {
    return NextResponse.json(error)
  }

  return NextResponse.json(data, { status: 201 })
}