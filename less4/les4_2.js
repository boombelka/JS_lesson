/**
 * Функция разбивает число по единицам, десяткам и сотням и выводит результат этого раздела.
 * @param num - число подлежащее разбиению
 * @returns {Object} Объект с разрядами числа или пустой объект в случае ошибки.
 */


function splitNumberToPart(num) {
    if (num < 0 || num > 999 || !Number.isInteger(num) ) {
        console.log('Введенное число должно быть в диапазоне от 0 до 999');
        return {};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),

    }
}
    console.log(splitNumberToPart(325))