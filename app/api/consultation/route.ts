import { and, eq, gt } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/db";
import { consultationRequests } from "../../../db/schema";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(160),
  business: z.string().trim().max(140).optional().default(""),
  website: z.union([z.literal(""), z.string().trim().url().max(300)]).optional().default(""),
  service: z.enum(["Social Media Marketing", "AI-Powered Content Creation", "Search Engine Optimization (SEO)", "Paid Advertising", "Website & Landing Page Optimization", "AI Marketing Automation", "Not sure — I need guidance"]),
  message: z.string().trim().min(20).max(3000),
  website2: z.string().max(0),
  formStartedAt: z.number().int().positive(),
});

async function hash(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function POST(request: NextRequest) {
  try {
    const body = schema.safeParse(await request.json());
    if (!body.success) return NextResponse.json({ message: "Please review the highlighted fields and try again." }, { status: 400 });
    if (Date.now() - body.data.formStartedAt < 1500 || Date.now() - body.data.formStartedAt > 86_400_000) return NextResponse.json({ message: "Please refresh the page and try again." }, { status: 400 });
    const db = getDb();
    const dedupeHash = await hash(`${body.data.email.toLowerCase()}|${body.data.message.toLowerCase()}`);
    const cutoff = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const duplicate = await db.select({ id: consultationRequests.id }).from(consultationRequests).where(and(eq(consultationRequests.dedupeHash, dedupeHash), gt(consultationRequests.createdAt, cutoff))).limit(1);
    if (duplicate.length) return NextResponse.json({ message: "This request was already received. Thank you — I’ll review it shortly." }, { status: 409 });
    await db.insert(consultationRequests).values({ id: crypto.randomUUID(), name: body.data.name, email: body.data.email.toLowerCase(), business: body.data.business || null, website: body.data.website || null, service: body.data.service, message: body.data.message, dedupeHash, createdAt: new Date().toISOString() });
    return NextResponse.json({ message: "Thank you. Your consultation request has been received." }, { status: 201 });
  } catch (error) {
    console.error("Consultation request failed", error);
    return NextResponse.json({ message: "The request could not be sent right now. Please try again shortly." }, { status: 500 });
  }
}
