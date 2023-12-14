export const isNullish = (value: number): boolean => {
  const EPSILON: number = 0.0001
  return Math.sign(value) === 1 ? value < EPSILON : !(value < -EPSILON)
}

export const roundTwoDecimal = (value: number): number => {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

export const importFile = async <T>(path: string): Promise<T> => {
  try {
    const request = await fetch(path, { method: 'GET' })
    if (!request.ok) return Promise.reject(request.statusText)

    return request.json() as Promise<T>
  } catch (err) {
    return Promise.reject(err)
  }
}