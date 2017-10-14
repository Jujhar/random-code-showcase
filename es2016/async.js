const scoreboard = async() => {
    return new Promise((resolve,reject) => {
        resolve("Anaheim wins!")
    })
}

const callAnnouncer = async() => {
    const result = await scoreboard()
    console.log(`announcer says: ${result}`)
}

callAnnouncer()
