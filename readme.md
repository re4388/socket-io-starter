# Socket.io 入門學習
[Socket.IO — Chat | Socket.IO](https://socket.io/get-started/chat#Introduction)

- 用express 架起一個http web server
- 再用socket.io 架起瀏覽器客戶端，和http server上的socket server, 讓兩邊可以建立連線
- 透過簡單的API，可以建立出server端對瀏覽器端（複數）的監聽事件`connection`
- 建立連線後，也可以透過`socket`物件，建立中斷`disconnect`的事件
- 瀏覽器可以自定義事件，然後發送事件，後端透過監聽和cb去處理。
- 後端也可以發送事件，基本上就是一個廣播，所有連接的瀏覽器也可以用on去監聽，然後cb去處理。
- 基本上，透過上面這兩點，就做到了聊天室的基本架構。
  - 瀏覽器輸入聊天內容後，可以發送事件（搭載內容）到伺服器，伺服器可以監聽此事件並且處理。
  - 伺服器會進行廣播，可以再把事件傳到所有連接的瀏覽器中。然後瀏覽器再把收到的訊息，放到聊天室中（html操作）。
- 總結一下
  - 瀏覽器需要發送內容 `emit`
  - 伺服器需要監聽`on`，並廣播`emit`到所有瀏覽器。
  - 瀏覽器與需要監聽`on`事件，然後處理收到的廣播。