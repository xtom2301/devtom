import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    desc: v.string(),
    github: v.string(),
    link: v.string(),
    name: v.string(),
    technologies: v.array(v.string()),
    thumbnail: v.string(),
  }),
});
