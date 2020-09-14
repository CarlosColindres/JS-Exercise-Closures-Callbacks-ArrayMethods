function a() {
    console.log('hello')
    
    function b() {
        console.log('hello2')
        return true;
    }
    b()
    console.log("hello")
}

a()