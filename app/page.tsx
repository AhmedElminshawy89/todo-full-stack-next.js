import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const {userId} = auth();
  const todo = await getUserTodoListAction({userId});
  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4">
        <div className="flex justify-end">
          <AddTodoForm userId={userId}/>
        </div>
        <TodoTable todos={todo} />
      </div>
    </main>
  );
}

{
  /* <main className="container p-4">
<div className="flex flex-col gap-2">
  <div className="flex justify-end mb-4">
    <ModeToggle />
  </div>
  <div className="flex justify-end mb-4">
    <AddTodoForm />
  </div>
</div>
<TodoTable todos={todo} />
</main> */
}
