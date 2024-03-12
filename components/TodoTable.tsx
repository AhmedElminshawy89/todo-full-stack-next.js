"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ITodo } from "@/Interfaces";
import { Badge } from "@/components/ui/badge";
import TodoTablesActions from "./TodoTablesActions";

export function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent Todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell className="font-medium">
                {todo.title.slice(0, 15)}
              </TableCell>
              <TableCell>{todo.body?.slice(0, 50)}</TableCell>
              <TableCell>
                {todo.completed ? (
                  <Badge color="primary">Completed</Badge>
                ) : (
                  <Badge color="secondary">Uncompleted</Badge>
                )}
              </TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
                <TodoTablesActions todo={todo} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No todos available.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{!todos.length?"You Don`t Have Any Todo Yet":todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
