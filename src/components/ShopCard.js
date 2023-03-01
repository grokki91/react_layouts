export default function ShopCard(props) {
    return(
        <div className="shopcard">
            {props.cards.map((card, index) => {
                return(
                    <div className="card-box" key={index}>
                        <h3>{card.name.toUpperCase()}</h3>
                        <div>{card.color}</div>
                        <img src={card.img} key={index} alt='' />
                        <div className="card-footer">
                            <div className="price">${card.price}</div>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}