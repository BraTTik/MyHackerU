
export function getCategoryImage(category){
    switch(category.toUpperCase()){
        case 'TABLES':
            return 'http://test-api.ipromote.ru/img/Nathan_skrivebord.jpg'//table
        case 'CHAIRS':
            return 'http://test-api.ipromote.ru/img/0512775_PE638684_S5.webp'//стул
        case 'ARM CHAIRS':
            return 'http://test-api.ipromote.ru/img/0325450_PE517970_S5.jpeg'//кресло
        case 'LAMPS':
            return 'http://test-api.ipromote.ru/img/0609296_PE684433_S5.webp'//lamp
        case 'SOFAS':
            return 'http://test-api.ipromote.ru/img/0761365_PE751231_S5.webp'//диван
        case 'ALL':
            return 'http://test-api.ipromote.ru/img/Ikea-stolyi.jpg'
    }
}

