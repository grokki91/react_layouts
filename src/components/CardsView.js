import ShopCard from "./ShopCard";

export default function CardsView(props) {
    return(
        <>
        {/* <div>{console.log(props.cards)}</div> */}
            <ShopCard cards={props.cards}/>
        </>
    );
}