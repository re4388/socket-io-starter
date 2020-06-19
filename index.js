var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// listen on the `connection` event for incoming sockets from browser
// and log it to the console.

// 太有趣，這邊用io.on 監聽 connection 事件，基本上你就可以透過
// socket.io幫你弄好的brower clint 和socker.io的server端，
// 知道是否有 connection 事件發生，然後做你要做的事情，這邊只是console log
io.on("connection", (socket) => {
  console.log("a user connected");
  // 然後你也可以用內建的socket進行連線之後，更進一步的監聽。譬如連線後的斷線
  // 的事情 `disconnect` 你可以做任何你要做的事情，當瀏覽器那邊斷線。
  socket.on("disconnect", () => {
    console.log(`user disconnect`);
  });
  //瀏覽器定義了一個 char message的事件，這邊可以進行監聽，因此可以接收前端的訊息並後續處理
  socket.on("chat message", (msg) => {
    console.log(`msg: ${msg}`);
    // 聊天室，最重要的就是broadcasting! 後端可以emit訊息給所有連上server的瀏覽器
    // 這邊一個簡單的例子，我們把msg直接讓所有的連接者都看到
    io.emit("chat message", msg)
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
