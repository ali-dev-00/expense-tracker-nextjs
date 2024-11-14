import { db } from "../../../../../../utils/dbConfig";
import { Expenses } from "../../../../../../utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import moment from "moment"; // Assuming you want to format dates

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const confirmed = window.confirm("Are you sure you want to delete this expense?");
    if (!confirmed) return;

    try {
      const result = await db
        .delete(Expenses)
        .where(eq(Expenses.id, expense.id))
        .returning();

      if (result) {
        toast.success("Expense Deleted!");
        refreshData();
      }
    } catch (error) {
      toast.error("Failed to delete expense.");
      console.error(error);
    }
  };

  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg">Latest Expenses</h2>
      <div className="grid grid-cols-4 rounded-tl-xl rounded-tr-xl bg-slate-200 p-2 mt-3">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>

      {/* Check if expensesList is defined and has items */}
      {expensesList && expensesList.length > 0 ? (
        expensesList.map((expense) => (
          <div key={expense.id} className="grid grid-cols-4 bg-slate-50 rounded-bl-xl rounded-br-xl p-2">
            <h2>{expense.name}</h2>
            <h2>{expense.amount}</h2>
            <h2>{moment(expense.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</h2>
            <h2
              onClick={() => deleteExpense(expense)}
              className="text-red-500 cursor-pointer"
            >
              Delete
            </h2>
            {/* <h2>
              <Trash
                className="text-red-500 cursor-pointer"
                onClick={() => deleteExpense(expense)}
              />
            </h2> */}
          </div>
        ))
      ) : (
        <div className="bg-slate-100 p-2 text-center">No expenses available</div> // Display message if no expenses
      )}
    </div>
  );
}

export default ExpenseListTable;
