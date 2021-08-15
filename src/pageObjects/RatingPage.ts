import Page from './page';
import Element from '../elements/Element';

/**
 *  страница /rating
 */
class RatingPage extends Page {
  /**
   * Объявление селекторов до элементов
   */

  get goToRating() {
    const element = new Element({ name: 'кнопка перехода на /rating', locator: '//*[@href="/rating"]'  });
    return browser.element(element);
  }

  get PromResult() {
    const element = new Element({ name: 'столбец рейтинга с количеством лайков', locator: '//*[@class="rating-names_item-count__1LGDH has-text-success"]'  });
    return browser.element(element);
  }

  async open() {
    const go = await super.open();
    return go;
  }
}

export default new RatingPage('страница рейтинга');
