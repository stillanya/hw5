function books(...book) {
    const withU=[];
    const withoutU=[];

    for (let i=0; i<book.length; i++){
        if (book[i].toLowerCase().includes('у')){
            withU.push(book[i])

        }else {
            withoutU.push(book[i])

        }
    }
    console.log(withU,'-Книги,у которых в названии есть "У"')
    console.log(withoutU,'-Книги,у которых нет в названии "У"')
}books('О дивный новый мир','Тошнота','Одиссея','Кафка на пляже','Унесенные ветром','Защита Лужина','Мультики','Тайные виды на гору Фудзи')
