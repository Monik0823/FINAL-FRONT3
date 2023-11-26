export const callDentists = () => {
    return fetch (
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "GET"
        }
    ) .then((rest) => rest.json())
}

export const callDentistId = (id) => {
    return fetch (
        "https://jsonplaceholder.typicode.com/users/" + id,
        {
            method: "GET"
        }
    ) .then((rest) => rest.json())
}