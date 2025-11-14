

export const createOrder = async (products : number[], token: string) => {

    try {
        const res = await fetch(("http://localhost:3005/orders"), {
            method: "POST",
            headers: {
                "Content-type" : "application/json",
                Authorization: token,
            },
            body: JSON.stringify(products),
        })

        const orders = await res.json()
        return orders;
    
    } catch (error) {
        throw new Error(error as string);
    }
}