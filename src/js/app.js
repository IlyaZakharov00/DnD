const createCard = (board, text) => {
  let cardsContainer = document.createElement("ul"); // создаем ul
  let card = document.createElement("li"); // создаем li
  let content = document.createElement("p"); // создаем p
  let deleteBox = document.createElement("div"); // создаем div

  cardsContainer.appendChild(card); // добавляем в карточку контейнер
  card.appendChild(content); // добавляем в карточку контент
  content.textContent = text; // записываем значение

  cardsContainer.classList.add("cards-list"); // добавляем класс
  card.classList.add("board-item"); // добавляем класс
  card.draggable = true; //разрешаем перемещаться карточке
  deleteBox.classList.add("delete-box"); // добавляем класс.
  content.classList.add("item-content"); // добавляем класс

  const cardsList = board.querySelector(".cards-list"); // ищем список с карточками в доске

  if (!cardsList) {
    board.appendChild(cardsContainer); // если списка нет то добавялем его
  } else {
    cardsList.appendChild(card); // иначе добавялем карточку в имеющийся список
  }

  const deleteCard = () => {
    //функция для удаления карточки и очищения localstorage
    card.remove();
    localStorage.clear();
  };

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

  card.addEventListener("dragstart", (e) => {
    e.target.classList.add("selected"); // добавим класс
  });

  card.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected"); // удалим класс
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
};

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
    const board = e.target.closest(".board"); //ищем доску

    createCard(board, text.value);

    text.value = ""; // очищаем поле с текстом

    formCard.remove(); // удаляем форму карт
  });

  window.addEventListener("beforeunload", () => {
    let Data = {}; // создаем объект даты
    let boards = document.querySelectorAll(".board"); // ищим все доски
    for (const board of boards) {
      let content = []; // для каждой доски создаем массив
      let ulList = board.querySelector(".cards-list"); // ищим в ней список с элементами карт
      if (ulList) {
        //если список есть
        let cards = ulList.querySelectorAll(".item-content"); // ищим сами карточки
        if (cards && ulList.childElementCount !== 0) {
          //если карточки есть
          for (const card of cards) {
            //проходимся по ним циклом
            let text = card.textContent; // записываем и пушим их значения в массив
            content.push(text);
          }
          Data[board.title] = content; // записываем в объект даты ключ - название доски, а значение - массив из значений в этой доске
        }
      }
    }
    if (Object.keys(Data).length !== 0) {
      localStorage.setItem("Data", JSON.stringify(Data)); // отправляем в localstorage
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const boardData = localStorage.getItem("Data"); // получаем с localstorage данные
  let data;
  try {
    data = JSON.parse(boardData); //пытаем распарсить данные
  } catch (error) {
    console.log(error); // если что ошибка
  }
  if (data) {
    // если распарсить получилось
    Object.keys(data).forEach((key) => {
      //для каждого ключа (название доски)
      let board = document.querySelector(`[title="${key}"]`); // ищим эту доску в документе
      let values = data[key]; // создаем значения по имени доски с массива из объекта
      values.forEach((value) => {
        // для каждого значения вызываем функцию создания элемента
        createCard(board, value);
      });
    });
  }
});
