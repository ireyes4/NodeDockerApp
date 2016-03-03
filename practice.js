function foo(x){
    var z = ++x;
    function bar()
    {
        console.log(z);
    };
    bar();
}

foo(4);
