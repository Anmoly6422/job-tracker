"use server";

import connectDB from "@/lib/db";
import { Board, Column, JobApplication } from "@/lib/models";
import { revalidatePath } from "next/cache";

export async function deleteColumn(columnId: string) {
  await connectDB();

  const column = await Column.findById(columnId);

  if (!column) {
    throw new Error("Column not found");
  }

  const board = await Board.findById(column.boardId);

  if (!board) {
    throw new Error("Board not found");
  }

  if (board.columns.length === 1) {
    throw new Error("You cannot delete the last column.");
  }

  // Delete all jobs in this column
  await JobApplication.deleteMany({
    columnId: column._id,
  });

  // Remove the column from the board
  await Board.findByIdAndUpdate(column.boardId, {
    $pull: {
      columns: column._id,
    },
  });

  // Delete the column
  await Column.findByIdAndDelete(column._id);

  revalidatePath("/dashboard"); // Change this to your board page route if different
}