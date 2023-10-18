import { supabase } from "@/utils/supabaseClient";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

// 1件取得
export async function GET( req: Request, { params }: any ) {
  const id = params.id
  const { data, error } = await supabase
  .from("posts")
  .select("*")
  .eq('id', id)
  if (error) {
    return NextResponse.json(error)
  }
  if(!data) {
    notFound()
  }
  return NextResponse.json(data, { status: 200 })
}

// 削除用API
export async function DELETE( req: Request, { params }: any ) {
  const id = params.id
  const { error: deleteError } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

      if (deleteError) {
        return NextResponse.json(deleteError)
      }
      return NextResponse.json({ status: 200 })
}