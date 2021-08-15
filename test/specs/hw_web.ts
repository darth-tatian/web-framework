import MainPage from "../../src/pageObjects/MainPage";
import SearchPage from "../../src/pageObjects/SearchPage";
import allureReporter from "@wdio/allure-reporter";

let catRat = {};

describe('Проверка рейтинга котов на отсортированность', async () => {
    before('переход на страницу /rating', async () => {
        await MainPage.open();
        const Rating = = await browser.$('//*[@href="/rating"]');
        await Rating.click();
    });

})