document.addEventListener("DOMContentLoaded", () => {
  console.log("загружено");

  const btnAdd = document.querySelectorAll(".board-add-Control"); // ищем все кнопки добавления
  const formCard = document.querySelector(".item-enter-form"); // ищем форму для карточки
  const btnaddCard = document.querySelector(".form-data-button"); // ищем кнопку добавления карточки

  for (const btn of btnAdd) {
    // на всех кнопках подписываемся на клик
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // убираем действия по умолчанию
      e.target.parentElement.appendChild(formCard); // добавляем форму карточки в часть доски где был клик
      formCard.classList.remove("invisible"); // удаляем невидимость
      formCard.style.width = 90 + "%"; // ширина формы
    });
  }

  btnaddCard.addEventListener("click", (e) => {
    // отслеживаем нажатие на кнопку добавить карточку

    e.preventDefault(); // убираем действия по умолчанию

    formCard.classList.add("invisible"); // удаляем невидимость
    let text = formCard.querySelector(".form-data-text"); //ищем поле с текстом

    let cardsContainer = document.createElement("ul"); // создаем ul
    let card = document.createElement("li"); // создаем li
    let content = document.createElement("p"); // создаем p
    let deleteBox = document.createElement("div"); // создаем div

    cardsContainer.appendChild(card); // добавляем в карточку контейнер
    card.appendChild(content); // добавляем в карточку контент
    content.textContent = text.value; // записываем значение

    cardsContainer.classList.add("cards-list"); // добавляем класс
    card.classList.add("board-item"); // добавляем класс
    card.draggable = true; //разрешаем перемещаться карточке
    deleteBox.classList.add("delete-box"); // добавляем класс.
    content.classList.add("Item-Content"); // добавляем класс

    text.value = ""; // очищаем поле с текстом

    const board = e.target.closest(".board"); //ищем доску
    const cardsList = board.querySelector(".cards-list"); // ищем список с карточками в доске
    if (!cardsList) {
      e.target.closest(".board").appendChild(cardsContainer); // если списка нет то добавялем его
    } else {
      cardsList.appendChild(card); // иначе добавялем карточку в имеющийся список
    }

    formCard.remove(); // удаляем форму карт

    const deleteCard = () => {
      //функция для удаления карточки
      card.remove();
    };

    card.addEventListener("mouseover", (e) => {
      // отслеживаем наведение мышки на карточку
      deleteBox.classList.remove("invisible"); // удаляем крестик

      const { height } = card.getBoundingClientRect(); // найдем высоту карты
      deleteBox.style.top = height / 2 - 12 + "px"; // позициноируем...
      deleteBox.style.right = 10 + "px";
      card.appendChild(deleteBox); // добавляем в карточку значок удаления
      deleteBox.addEventListener("click", deleteCard); // следим за кликом у крестика
    });

    card.addEventListener("mouseout", (e) => {
      // отслеживаем отведение мышки на карточку
      deleteBox.removeEventListener("click", deleteCard);
      deleteBox.classList.add("invisible"); // скрываем крестик
    });

    const getNextElement = (cursorPosition, dragoverElement) => {
      const dragoverElementCoord = dragoverElement.getBoundingClientRect(); //найдем координаты элемента на которм произошел over
      const dragoverElementCenter =
        dragoverElementCoord.y + dragoverElementCoord.height / 2; //найдем центральную ось этого элемента

      const nextElement =
        cursorPosition < dragoverElementCenter // если позиция курсора ниже центральной линии то выбираем этот элемент. иначе следующий
          ? dragoverElement
          : dragoverElement.nextElementSibling;

      return nextElement;
    };

    card.addEventListener("dragstart", (e) => {
      e.target.classList.add("selected"); // добавим класс
    });

    card.addEventListener("dragend", (e) => {
      e.target.classList.remove("selected"); // удалим класс
      console.log("завершили");
    });

    card.addEventListener("dragover", (e) => {
      let nullEl = document.querySelector(".nothing");
      if (nullEl) nullEl.remove();
      e.preventDefault(); // удаляем дейсвтия по умолчанию
      const slctCard = document.querySelector(".selected"); // выбранные элемент
      let dragoverElement = e.target; // элемент на котором произошел dragover

      const isMoveable =
        slctCard !== dragoverElement &&
        dragoverElement.classList.contains("board-item"); // проверяем если выбранная карта совпадает с элементом на котором прозошел over или у этого элемента нет класса board-item

      if (!isMoveable) return;

      let nextElement = getNextElement(e.clientY, dragoverElement); //получим элемент

      let listCards = document.querySelector(".cards-list"); //найдем весь список задач

      listCards.insertBefore(slctCard, nextElement); // меняем выбранный элемент на замещающий элемент
    });
  });
});
