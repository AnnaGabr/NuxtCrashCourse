export default defineEventHandler((e) => {
    const method = e.req.method
    const context = e.context
    console.log(e.context.params)

    if ( method === "PUT" ) {
        const id = context.params.id
    }
})