var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


const port = process.env.PORT || 3000;


app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection',function(socket){
    console.log('one user connected '+socket.id);



    socket.on('CHAT' , function (data) {
        console.log('======CHAT message========== ');
        console.log(data);
        socket.emit('CHAT',data);

    });

    socket.on('disconnect',function(){
        console.log('one user disconnected '+socket.id);
    });

})

http.listen(port ,function(){
    console.log('server listening on port 3000');
})