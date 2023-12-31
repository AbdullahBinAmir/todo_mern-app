import axios, { AxiosResponse } from 'axios'
import { ApiDataType, Todo } from './types'

const baseUrl: string = 'https://6766-223-123-85-140.ngrok-free.app'

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + '/todos'
    )
    return todos
  } catch (error) {
    throw new Error('error')
  }
}

export const addTodo = async (
  formData: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<Todo, '_id'> = {
      task: formData
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-todo',
      todo
    )
    return saveTodo
  } catch (error) {
    throw new Error('error')
  }
}

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-todo?id=${_id}`
    )
    return deletedTodo
  } catch (error) {
    throw new Error('error')
  }
}