import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';

const MenuListItem = ({ menuItem, onAddToCart }) => {
    const { title, price, url, category } = menuItem;

    return (
        <li className="menu__item">
            <Link to={`/${menuItem.id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <span className={`menu__category_Img ${category}`}></span>
            </Link>
            <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>

        </li>
    )
}

export default MenuListItem;

// let svgCategory = '';
// if (category === 'meat') {
//     svgCategory = <svg id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101"><title>Artboard 2 copy 14</title><path d="M86.43,58.34,69.59,45l.8-1.44a9.93,9.93,0,0,0,.57-7l8.42-8.42A6.67,6.67,0,1,0,84,16.64,6.67,6.67,0,1,0,72.6,21.31l-8.42,8.42a10.05,10.05,0,0,0-7.09.61l-3.47,1.92A31.5,31.5,0,1,0,33.5,88h42l.28,0,.72,0A16.52,16.52,0,0,0,93,71.5,16.35,16.35,0,0,0,86.43,58.34ZM75.92,22.23a1.5,1.5,0,0,0-.33-2.37,3.67,3.67,0,1,1,5.22-1.92,1.5,1.5,0,0,0,1.93,1.93,3.68,3.68,0,1,1-1.92,5.22,1.5,1.5,0,0,0-2.37-.33L69.6,33.62a9.49,9.49,0,0,0-2.53-2.53ZM58.46,33a6.91,6.91,0,0,1,9.25,9.13l-1.38,2.49,0,0-9.9,17.87a13.33,13.33,0,1,1-18.3-18.26l16-8.88.12-.06Zm18,52c-.23,0-.46,0-.69,0h-.2a1.38,1.38,0,0,0-.46,0H33.5A28.5,28.5,0,1,1,50.75,33.86L36.62,41.69A16.33,16.33,0,1,0,59,64.07l0,0,9.09-16.41,16.48,13.1A13.49,13.49,0,0,1,76.5,85Z" /><circle cx="11.5" cy="55.5" r="2.5" /><circle cx="16.5" cy="47.5" r="2.5" /><circle cx="21.5" cy="55.5" r="2.5" /><circle cx="47.5" cy="60.5" r="2.5" /></svg>
// }

// if (category === 'salads') {
//     svgCategory = <svg id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101"><title>Artboard 2 copy 11</title><path d="M46.5,39A1.5,1.5,0,0,0,45,40.5v19a1.5,1.5,0,0,0,3,0v-19A1.5,1.5,0,0,0,46.5,39Z" /><path d="M56,59.5v-19a1.5,1.5,0,0,0-3,0v19a1.5,1.5,0,0,0,3,0Z" /><path d="M92,37.78a1,1,0,0,0,0-.56,1.44,1.44,0,0,0-.07-.28,1.47,1.47,0,0,0-.15-.26,1.41,1.41,0,0,0-.11-.19l-.09-.09,0,0C90.87,35.81,76,22.67,59.17,19.62A79.66,79.66,0,0,0,60.56,9.52s0,0,0-.06,0-.07,0-.11a1.52,1.52,0,0,0,0-.27v0a1.46,1.46,0,0,0-.16-.38l0-.06a1.47,1.47,0,0,0-.26-.31h0a1.5,1.5,0,0,0-.31-.2l-.06,0h0a1.54,1.54,0,0,0-.36-.1H59a85.33,85.33,0,0,0-14.69,2.43c-7.52,1.9-18,5.67-25.18,12.86-12.33,12.33-5,29-4.56,29.94h0l0,0,0,.07a1.48,1.48,0,0,0,.16.24l.1.11.19.16.13.08.08,0a31.44,31.44,0,0,0,12.47,2.64A25.21,25.21,0,0,0,37,54.85v8.3a15.51,15.51,0,0,0,2.82,9.17L41.77,75A12.67,12.67,0,0,1,44,82.35V96.5a1.5,1.5,0,0,0,3,0V82.35a15.51,15.51,0,0,0-2.82-9.17l-1.95-2.64A12.67,12.67,0,0,1,40,63.15V40.5a1.5,1.5,0,0,0-3,0V51.58c-7.24,3.34-14.83,1.59-18.38.41L57.14,13.49a82.36,82.36,0,0,1-5,19.62,1.5,1.5,0,0,0,2.78,1.13,77.46,77.46,0,0,0,3.66-11.67c13.28,2.37,25.67,11.7,29.64,14.94C84.75,40.3,75.1,47.6,64,51.09V40.5a1.5,1.5,0,0,0-3,0V63.15a12.68,12.68,0,0,1-2.23,7.39l-1.95,2.64A15.52,15.52,0,0,0,54,82.35V96.5a1.5,1.5,0,0,0,3,0V82.35A12.68,12.68,0,0,1,59.23,75l1.95-2.64A15.52,15.52,0,0,0,64,63.15V54.22c14.82-4.35,27-15.14,27.51-15.6l0,0,.09-.08a1.42,1.42,0,0,0,.11-.19,1.47,1.47,0,0,0,.15-.26A1.44,1.44,0,0,0,92,37.78ZM55,11.37l-25,25V19C39,14.1,49.37,12.13,55,11.37ZM16.49,49.89c-1.56-4.53-4.08-15.72,4.75-24.55A35.14,35.14,0,0,1,27,20.74V39.38Z" /></svg>
// }

// if (category === 'pizza') {
//     svgCategory = <svg id="Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101"><title>Artboard 2 copy 10 копия 7</title><path d="M84.44,16.56a48,48,0,1,0,0,67.88A48.06,48.06,0,0,0,84.44,16.56ZM18.68,82.32A45,45,0,1,1,93.71,63L51,49.23a1.5,1.5,0,0,0-1.89,1.89L62.84,93.76A45,45,0,0,1,18.68,82.32Zm63.64,0A44.73,44.73,0,0,1,65.7,92.85L52.83,53,92.78,65.87A44.72,44.72,0,0,1,82.32,82.32Z" /><path d="M38.92,73.83a6.5,6.5,0,1,0-6.5-6.5A6.51,6.51,0,0,0,38.92,73.83Zm0-10a3.5,3.5,0,1,1-3.5,3.5A3.5,3.5,0,0,1,38.92,63.83Z" /><path d="M45.92,23a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,45.92,23Zm0,10a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,45.92,33Z" /><path d="M83.62,67.08a1.5,1.5,0,0,0-2,.59A35.63,35.63,0,0,1,68.37,81.18a1.5,1.5,0,0,0,1.51,2.59A38.65,38.65,0,0,0,84.2,69.12,1.5,1.5,0,0,0,83.62,67.08Z" /><path d="M55.89,87.14a1.5,1.5,0,0,0-1.65-1.34A36.05,36.05,0,0,1,50.5,86,35.5,35.5,0,1,1,86,50.5a36.1,36.1,0,0,1-.32,4.78,1.5,1.5,0,1,0,3,.4A39.13,39.13,0,0,0,89,50.5,38.5,38.5,0,1,0,50.5,89a39.11,39.11,0,0,0,4.05-.21A1.5,1.5,0,0,0,55.89,87.14Z" /><path d="M33.6,43.15a1.5,1.5,0,0,0-2.12,0L22.59,52a1.5,1.5,0,1,0,2.12,2.12l8.89-8.89A1.5,1.5,0,0,0,33.6,43.15Z" /><path d="M68.62,33a6.5,6.5,0,1,0,6.5,6.5A6.51,6.51,0,0,0,68.62,33Zm0,10a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,68.62,43Z" /></svg>
// }

// <div className={`menu__category_Img ${category}`}>{svgCategory}</div>