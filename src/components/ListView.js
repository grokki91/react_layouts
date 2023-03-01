import ShopItem from "./ShopItem";

export default function ListView({items}) {
    return(
        <>
            <ShopItem items={items}/>
        </>
    );
}