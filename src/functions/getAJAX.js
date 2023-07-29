import { CreateRequest } from "./createRequest"


export const SendRequest = async (path, action) => {
    const res = await fetch(path, {method: "GET"});
    const data = await res.json()
    action(data)
}