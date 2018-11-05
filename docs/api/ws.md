# 개요

웹소켓을 통해 이벤트를 받거나 명령을 전송합니다. 명령과 이벤트 모두 type 필드를 기준으로 나뉩니다.

# 명령

## chat
```
{
    "type": "chat",
    "msg": "내용"
}
```
채팅을 보냅니다.

# 이벤트

## initial
```
{
    "type": "initial",
    "lobby": Lobby,
    "chats": [Chat],
    "game": Game
}
```

처음 들어왔을 때 보내집니다. 방의 기존 정보들을 담고 있습니다.

## game-start
```
{
    "type": "game-start",
    "game": Game
}
```
게임이 시작되었을 때 보내집니다.

## game-end
```
{
    "type": "game-end",
    "winner": User,
    "loser": User
}
```
게임이 끝났을 시 보내집니다.

## game-change
```
{
    "type": "game-change",
    "game": Game
}
```

게임의 필드가 바뀌었을 때 보내집니다.

## your-turn
```
{
    "type": "your-turn"
}
```
접속자의 턴이 시작될 시 보내집니다.

## lobby-change
```
{
    "type": "lobby-change",
    "lobby": Lobby
}
```
로비의 필드가 바뀌었을 때 보내집니다.

## error
```
{
    "type": "error",
    "error": 아래의 에러 참조,
    "data": [추가 정보]
}
```
에러 메세지를 담고 있습니다.

# 스키마

## Lobby
```
{
    "users": [User],
    "king": User,
    "black": User,
    "white": User,
    "ingame": true
}
```

## Chat
```
{
    "user": User,
    "msg": "string"
}
```

## Game
```
{
    "board": Board,
    "whitetime": int(남은시간(초)),
    "blacktime": int(남은시간(초))
}
```

## User

스웨거 문서 참조

## Board

게임 판 입니다

# 에러
