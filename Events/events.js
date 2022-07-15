module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        console.log(`I am ${client.user.tag}`)
    }
}