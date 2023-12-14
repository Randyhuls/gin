export type Key = Extract<keyof InputSchema, string>

export type InputSchema = {
  UP: string
  DOWN: string
  LEFT: string
  RIGHT: string
}