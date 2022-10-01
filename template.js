let restaurantListCardTemplate = function (name, address, id, status, image) {
  return `
            <div class="card" id="${id}">
              <div class="content">
                <img src="${image}" />
                <div class="restDetails">
                <p class="restName">${name}</p>
                <p class="address">${address}</p>
                </div>
              </div>
              <div class="badge ${status}">${status}</div>
           </div>
              `;
};

let restaurantlistTemplate = `
          <div id="restaurantListBody">
            <h1 class="intro">Bem vindo ao Lista Rango</h1>
            <div class="searchBar">
              <input type="text" placeholder="Buscar estabelecimento" />
            </div>
            <div id="wrap-table">
            <div id="table">

            </div>
            </div>
          </div>
         `;

let menuListBodyTemplate = `      
    <div class="rest-grid">

      <div class="rest-header">

      </div>

      <div class="rest-searchbar">
          <input type="text" placeholder="Buscar cardapio" />
      </div>

      <div class="rest-lunch">
        <div id="rest-lunch-hr" class="hide">Almoço
          <hr>
        </div>

        <div class="menuTable hide"></div>

          <div id="rest-drinks-hr" class="hide">Bebidas
              <hr>
          </div>

          <div class="menuTable hide"></div>

          <div id="rest-deserts-hr" class="hide">Sobremesas
              <hr>
          </div>

        <div class="menuTable hide"></div>
      </div>

    </div>`;

let menuListCardTemplate = function (image, name, description, price, id) {
  return `              
            <div class="menuCard" id=${id}>
                <img src=${image}>
                <div class="menuContent">
                    <div class="topCard">
                        <p class="menuName">${name}</p>
                        <div class="promoBadge hide">
                            Promo Almoço
                        </div>
                    </div>
                    <div class="menuDescription">${description}</div>
                    <div class="price">
                        <p class="promoPrice">R$ ${price}</p><br>
                        <p class="normalPrice">R$ ${price}</p>
                    </div>
                </div>
            </div>`;
};

let menuListHeaderTemplate = function (
  name,
  description,
  image,
  open_hours,
  close_hours,
  closing_days
) {
  return `      
          <div id="rest-header-img">
            <img src=${image}>
          </div>
          <div id="rest-header-details">

              <div id="rest-header-details-name">
                <span>${name}</span>
              </div>
              <div id="rest-header-detais-description">
                  <span>${description}</span>
              </div>
              <div id="rest-header-details-schedule">
                  <span>Open at: <span class="text-bold">${open_hours}</span></span>
                  <span>Closes at: <span class="text-bold">${close_hours}</span></span>
                  <span>Closed: <span class="text-bold">${closing_days}</span></span>
              </div>
          </div>`;
};

let menuModalTemplate = function (image, name, description, quantity, price) {
  return `                       
    <div id="modal-wrapper">
      <div id="modal">
          <div id="modal-image">
              <img src=${image} />
          </div>
          <div id="modal-title">
              <h1>${name}</h1>
          </div>
          <div id="modal-description">
              <span id="modal-description-textContent">
                  ${description}
              </span>
              <span id="modal-description-price">R$ ${price}</span>
          </div>
          <div id="modal-description-hr">
              <hr />
          </div>
          <div id="modal-quantity">
              <div id="modal-quantity-values">
                  <span id="modal-quantity-values-removeQuantity">-</span>
                  <span id="modal-quantity-values-items">${quantity}</span>
                  <span id="modal-quantity-values-addQuantity">+</span>
              </div>
              <div id="modal-quantity-price">
                  <span>Adicionar</spa2n>
                  <span>R$ <span id="modal-quantity-price-total">${price}</span></span>
              </div>
          </div>
      </div>
    </div>`;
};

export {
  restaurantListCardTemplate,
  menuModalTemplate,
  restaurantlistTemplate,
  menuListCardTemplate,
  menuListHeaderTemplate,
  menuListBodyTemplate
};
