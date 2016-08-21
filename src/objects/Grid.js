import Cell from 'objects/Cell';

class Grid extends Phaser.Group {

	constructor(game, nbRow, nbColumn, cellSize, xOrigin = 0, yOrigin = 0, cellColor = 0xFF3300, gridColor = 0x000000) {
		super(game)
		for(let y = 0; y < nbColumn; ++y) {
			for(let x = 0; x < nbRow; ++x) {
				this.add( new Cell(game, x * cellSize + xOrigin, y * cellSize + yOrigin, cellSize, cellSize, cellColor, gridColor) );
			}
		}
	}
}

export default Grid;