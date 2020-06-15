const promise = new Promise( (resolve, reject) => {
    
    setTimeout( () => {
        // resolve("this is my data");
        reject('Something went wrong :/');
    }, 3000);
    
    
});

promise
    .then( data => console.log(data))
    .catch( error => console.log(error));