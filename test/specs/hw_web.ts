import MainPage from "../../src/pageObjects/MainPage";
import allureReporter from "@wdio/allure-reporter";
import RatingPage from "../../src/pageObjects/RatingPage";

describe('Проверка рейтинга котов на отсортированность', async () => {
    before('открытие страницы', async () => {
        await MainPage.open();
        //переход на страницу /rating
        const toRatingPage = await RatingPage.goToRating;
        await toRatingPage.click();
    });

    it('получение списка лайков и сравнение его с отсортированным списком', async () => {
        //при раскомментированной следующей строке в аллюр-отчёте появится шаг с открытием страницы рейтинга, но тест проходит гораздо дольше
       // await RatingPage.open();

        const PromResult = await browser.$$('//*[@class="rating-names_item-count__1LGDH has-text-success"]');
        // заполним список лайков
        const RatingList: string[] = [];
        for (const cat of PromResult) {
            const num = await cat.getText();
            RatingList.push(num);
        }
        //создадим из вытащенных чисел сортированный по неубыванию список
        function compareNumbers(a, b) {
            return b-a;
        }
        let SortedByNum = RatingList.sort(compareNumbers);
        //сравним извлечённый с сайта список с отсортированным
        expect(RatingList).toEqual(SortedByNum);
        //allure
        allureReporter.startStep('Проверка рейтинга лайков на отсортированность');
        allureReporter.addAttachment('Ожидаемое значение', JSON.stringify(SortedByNum), 'text/plain');
        allureReporter.addAttachment('Фактическое значение', JSON.stringify(RatingList), 'text/plain')
        expect(RatingList).toEqual(SortedByNum);
        allureReporter.endStep();
    });
})