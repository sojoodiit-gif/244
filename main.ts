sprites.onCreated(SpriteKind.Enemy, function (sprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mysprite.vy = -150
    pause(500)
    mysprite.vy = 150
    pause(500)
    mysprite.vy = 0
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    let mySprite2: Sprite = null
    mySprite2.setImage(img`
        ......................bbb.......
        ....................bb333b......
        .................bbb333d33b.....
        ................bb333333d3a.....
        ..............bb33332eeeedba....
        ............bbb333323eee2e3a....
        ..........bbd333333e22222ed3a...
        .......bbbdd3333333e22222edda...
        ......bb3d333333333be222eb3d3a..
        ...bbb3dd33333333333beeeb33d3a..
        ..b3ddd33333333333333333333dda..
        bbddd3333333333333333333333dd3a.
        b33dddddd3333333333333333333d3a.
        bb3333333ddddd33333333333333dda.
        bbbbbbb333dd33dddddddddd3333ddba
        b55553bbbbbb3333dd33333ddd33dd3a
        b555555555553bbbbbbbb33333dddd3a
        bd555555555555555dddbaaaaab3d3ba
        bb55555555555555555dddddddbb33ba
        b3bb35555555555d5555d55dddddbbba
        b33333bbb355dd55555d555ddddddbba
        b5555d333333bbb35dddddd55ddddbba
        b5d555dd5553333bbbbb3ddddddddb3a
        b5d555555555555dd3333bbbbbb3db3a
        bd5d555555d55555dd555ddbbbbbbb3a
        bbb55dd555555555555555ddddddbb3a
        ...bbbbdd555ddd5555ddddddddddb3a
        .......bbbb555555d5ddd5ddddddb3a
        ...........bbbb55555555555dd533a
        ...............bbbbddd5d55d5b3ba
        ...................bbbbddddb3ba.
        .......................bbbaaaa..
        `)
    mySprite2.startEffect(effects.fire, 5000)
    sprites.destroy(mySprite2)
})
let mysprite: Sprite = null
mysprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mysprite, 100, 100)
tiles.setCurrentTilemap(tilemap`Level1`)
mysprite.setBounceOnWall(true)
