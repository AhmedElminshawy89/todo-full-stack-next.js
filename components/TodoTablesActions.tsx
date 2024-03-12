import { Button } from "@/components/ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoListAction } from "@/actions/todo.actions";

import { useState } from "react";
import Spinner from "./Spinner";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/Interfaces";
const TodoTablesActions = ({todo}:{todo:ITodo}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo}/>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoListAction({ id:todo?.id as string});
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <Trash size={18}/>}
      </Button>
    </>
  );
};

export default TodoTablesActions;
