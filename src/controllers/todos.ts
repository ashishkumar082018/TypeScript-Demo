import { Request, Response } from 'express';
import { Todo } from '../models/todo';

let todos: Todo[] = [];

export const getTodos = (req: Request, res: Response) => {
    res.status(200).json({ todos: todos });
};

export const addTodo = (req: Request, res: Response) => {
    const { text }: { text: string } = req.body;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
};

export const deleteTodo = (req: Request, res: Response) => {
    const todoId: string = req.params.todoId;
    todos = todos.filter(todo => todo.id !== todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
};

export const editTodo = (req: Request, res: Response) => {
    const todoId: string = req.params.todoId;
    const newText: string = req.body.text;
    const todoIndex: number = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex].text = newText;
        res.status(200).json({ message: 'Updated todo', todos: todos });
    } else {
        res.status(404).json({ message: 'Could not find todo for this id.' });
    }
};
