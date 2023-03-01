export default function ShopItem(props) {
    return(
        <div className="shopitem">
            {props.items.map((card, index) => {
                return(
                    <div className="item-box" key={index}>
                        <img src={card.img} key={index} alt='' />
                        <h3>{card.name.toUpperCase()}</h3>
                        <div>{card.color}</div>
                        <div className="price">${card.price}</div>
                        <button>ADD TO CART</button>
                    </div>
                );
            })}
        </div>
    );
}