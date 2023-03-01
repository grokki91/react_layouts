import ShopCard from "./ShopCard";

export default function CardsView(props) {
    return(
        <>
            <ShopCard cards={props.cards}/>
        </>
    );
}