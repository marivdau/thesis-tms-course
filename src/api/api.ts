export const newBooksRequest: typeof fetch = (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  return fetch(input, init)
}
