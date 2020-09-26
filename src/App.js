import React from 'react';

import logo from './images/logo.svg';
import delivery from './images/delivery.svg';
import sales from './images/sales.svg';
import uniform from './images/uniform.svg';
import returning from './images/returning.svg';
import lookbookimg from './images/lookbook.png';
import abg from './images/abg.png';
import collectionimg from './images/collection.png';
import whitelogo from './images/whitelogo.svg';
import item1 from './images/item6.png';
import item2 from './images/item5.png';
import item3 from './images/item4.png';
import item4 from './images/item3.png';
import item5 from './images/item2.png';
import item6 from './images/item1.png';

import HeadCarousel from './headcarousel.js';
import './App.css';

function Header() {
  return (
    <header id = "head">
        <div className = "top-head">
          <div className = "left-head">
            <div className = "left-head-top">
              <img className = "logo-head" src = {logo} />
              <ul className = "list-head list-categories">
                <li>Женское</li>
                <li>Мужское</li>
                <li>Детям</li>
                <li>Аксессуары</li>
                <li>Обувь</li>
              </ul>
            </div>
            <div className = "left-head-bottom">
              <span className = "title-head">Яркие коллекции на любой день и случай</span>
              <span className = "subtitle-head">
                Мы предлагаем новые коллекции, 
                в которых представлены актуальные модные тренды, 
                адаптированные к повседневной жизни.
              </span>
                <button 
                  type="button"
                  onClick = 
                  {(e) => {e.preventDefault();
                   document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className = "button-head">Смотреть каталог
                </button>
                <div className = "arrow-out arrow-head" 
                     onClick = 
                     {(e) => {e.preventDefault();
                      document.getElementById('sale').scrollIntoView({ behavior: 'smooth', block: 'start' });
                     }}
                >
                  <div className = "line line-up">
                  </div>
                  <div className = "line line-down">
                  </div>
                  <div className = "arrow">
                  </div>
                </div>
            </div>
          </div>
          <div className = "right-head">
            <HeadCarousel />
          </div>
        </div>
        <div className = "bottom-head">
          <ul className = "list-head icons-head">
            <li><img src = {delivery} /><span>Бесплатная доставка по всему миру</span></li>
            <li><img src = {sales} /><span>Сезонные скидки на всё до -80%</span></li>
            <li><img src = {uniform} /><span>Только подлинные и качественные товары</span></li>
            <li><img src = {returning} /><span>30 дней для возврата на все товары</span></li>
          </ul>
        </div>
      </header>
  );
}

function Sale() {
  return (
    <section className = "sale" id = "sale">
      <span class = "title-sale">Summer SALE</span>
    </section>
  )
}

function Catalog() {
  let items = [
    [item1, 'Однотонные прямые брюки', '#E4CAB4', 1103],
    [item2, 'Зауженные брюки LOVE REPUBLIC', '#D7C1A9', 999],
    [item3, 'Брюки клёш', '#E3D1BD', 1790],
    [item4, 'Зауженные брюки LOVE REPUBLIC', '#F0E9DA', 588],
    [item5, 'Однтонный прямой пиджак', '#EDEFF1', 630],
    [item6, 'Зауженные брюки LOVE REPUBLIC', '#F6E6D3', 899]
  ];

  let elements = [];

  for (let i = 0; i < items.length; i++) {
    elements.push(
      <div className = "bottom-catalog-item">
        <img src = {items[i][0]}/>
        <div className = "bottom-catalog-item-desc">
          <span>{items[i][1]}</span>
          <div className = "bottom-catalog-color" style = {{backgroundColor: items[i][2]}}></div>
          <div className = "bottom-catalog-price">
            <span>{items[i][3]+' грн.'}</span>
            <div className = "price-arrow"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className = "catalog" id = "catalog">
      <div className = "top-catalog">
        <div className = "lookbook">
          <img src = {lookbookimg} className = "lookbook-image" />
          <div className = "lookbook-description">
            <span className = "title-description">Летний lookbook</span>
            <span className = "subtitle-description">Летние коллекции от известных брендов</span>
            <button className = "lookbook-button">
              <span className = "lookbook-button-description">Смотреть</span>
              <div className = "button-arrow">
                <div className = "button-arrow-line"></div>
                <div className = "button-arrow-triangle"></div>
              </div>
            </button>
          </div>
        </div>
        <div className = "collection">
          <div className = "left-collection">
            <div className = "top-collection">
              <img className = "collection-image" src = {abg}/>
              <div className = "collection-line"></div>
              <div className = "collection-description">
                <span className = "title-description">Новая коллекция на каждый день</span>
                <span className = "subtitle-description">Легкая и простая. Сделает Ваш день немного веселее и приятнее.</span>
                <button className = "lookbook-button collection-button">
                  <span className = "lookbook-button-description">Смотреть</span>
                  <div className = "button-arrow">
                    <div className = "button-arrow-line"></div>
                    <div className = "button-arrow-triangle"></div>
                  </div>
              </button>
              </div>
            </div>
          </div>
          <div className = "right-collection">
            <div className = "right-collection-bg">
              <img src = {collectionimg} />
            </div>
          </div>
        </div>
      </div>
      <div className = "bottom-catalog">
        <span className = "catalog-description">Каталог товаров</span>
        <div className = "bottom-catalog-items">
          {elements}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <img src = {whitelogo}/>
      <ul className = "list-footer list-head list-categories">
        <li>Женское</li>
        <li>Мужское</li>
        <li>Детям</li>
        <li>Аксессуары</li>
        <li>Обувь</li>
      </ul>
      <span className = "footer-number">+ 38 (044) 395-48-69</span>
      <button className = "footer-button">Заказать звонок</button>
      <div
        className = "footer-arrow-button"
        onClick = 
        {(e) => {e.preventDefault();
         document.getElementById('head').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}>
        <div className = "footer-arrow"></div>
        <div className = "footer-line"></div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className = "App">
      <Header />
      <Sale />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
