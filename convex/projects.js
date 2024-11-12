import { query } from "./_generated/server";

export const getLatestProjects = query({
  handler: async (ctx) => {
    const tasks = await ctx.db.query("projects").order("desc").take(3);
    return tasks;
  },
});

export const getAllProjects = query(async (ctx) => {
  return await ctx.db.query("projects").collect();
});
