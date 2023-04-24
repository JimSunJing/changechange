import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const diaryRouter = createTRPCRouter({
  getByAuthor: publicProcedure
    .input(z.object({ authorId: z.string() }))
    .query(async ({ ctx, input }) => {
      const diary = await ctx.prisma.diary.findMany({
        take: 100,
        where: { authorId: input.authorId },
      });

      return diary;
    }),
});
