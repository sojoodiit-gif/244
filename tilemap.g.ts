// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`0a0008000505050505050504030505050304050505050505050505040504050502040504050505040505050505040405050504050505050501050504050305040503040504050505050405050505050505040505`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . 2 . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.rock0,sprites.castle.rock1,sprites.castle.tileGrass2,myTiles.tile1,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "tileGrass1":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
