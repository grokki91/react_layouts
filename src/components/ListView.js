import ShopItem from "./ShopItem";

export default function ListView(props) {
    return(
        <>
            <ShopItem items={props.items}/>
        </>
    );
}