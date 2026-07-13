import { NextResponse } from "next/server";
import { menuItems } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("q")?.toLowerCase();

  let items = [...menuItems];

  if (category && category !== "All") {
    items = items.filter((item) => item.category === category);
  }

  if (search) {
    items = items.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.tags?.some((tag) => tag.includes(search))
    );
  }

  return NextResponse.json({ items, total: items.length });
}
