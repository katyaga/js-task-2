const sumButton = document.querySelector('.form__button');

function possibleMoves(position) {
  const currentCoordinate = Array.from(position);
  const letter = currentCoordinate[0].toUpperCase().charCodeAt(0) - 64;

  // Проверка ввода корректной исходной позиции фигуры
  if (letter >= 1 && letter <= 8 && +currentCoordinate[1] >= 1 && +currentCoordinate[1] <= 8) {
    let possibleCoordinates = '';

    // Траектория движения фигуры по доске
    const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

    for (let i = 0; i < moves.length; i += 1) {
      let possibleCoordinate = '';

      let x = moves[i][0] + letter;
      const y = moves[i][1] + +currentCoordinate[1];

      // Проверка на то, что фигура не вышла за пределы поля
      if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
        x = String.fromCharCode(64 + x);
        possibleCoordinate = possibleCoordinate + x + y;
      }

      if (possibleCoordinate.length > 0) {
        possibleCoordinates = `${possibleCoordinates} ${possibleCoordinate}`;
      }
    }

    alert(possibleCoordinates);
  } else {
    alert('Вы ввели неверные координаты');
  }
}

sumButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const currentPosition = document.getElementById('position').value;
  possibleMoves(currentPosition);
});
