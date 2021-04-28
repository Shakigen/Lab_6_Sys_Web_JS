function filterBy(list, dataType) {                         //Обьвление и определение функции фильтра
    let Array = list.filter(                                //Обьвление и определение массива из входящего массива
        function(item) {                                    //Описание функции фильтации
        return typeof (item) != dataType ;                  //Возврат значения элемента массива если тип не совпадает //"!=="
    });
    console.log(Array);                                     //Вывод получившегося массива в консоль
    return Array;                                           //Возврат массива
}
filterBy(['hello', 'world', 23, '23', null], 'string');     //Вызов функции фильтрации
