import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2 class="section-title" tabindex="0" id="pageTitle">Favorite Restaurant</h2>
      <div class="restaurant-favorite"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    const restaurantFavoriteElement = document.querySelector('.restaurant-favorite');

    restaurants.forEach((restaurant) => {
      restaurantFavoriteElement.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
