import { Document } from "mongoose"

export interface TodoType extends Document {
  task: string
}