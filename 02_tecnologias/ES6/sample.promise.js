function msgAfterTimeout(msg,who,timeout){
    return new Promise((resolve, relject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}`), timeout);
    })
}

msgAfterTimeout("","foo",100)
.then((msg)=>
msgAfterTimeout(msg, "Barr",200))
.then((msg) => {
    console.log(`Done after 300ms ${msg}`);
})

this.msgAfterTimeout();