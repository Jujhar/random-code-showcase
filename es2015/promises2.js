data = {
    "cat" : 52,
    "dog" : 53
}

promisme = () => {
    return new Promise((resolve,reject) => {
            resolve("ye")
            reject("no")
        })
}

promisme()
    .then(result => console.log(result))
    .catch(error => console.log(error))