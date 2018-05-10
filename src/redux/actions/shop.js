export const INCREMENT = "shop/INCREMENT";
export const DECREMENT = "shop/DECREMENT";
export const RESET = "shop/RESET";

export function shop_increment(Id) {
    return {type: INCREMENT,Id}
}

export function shop_decrement(Id) {
    return {type: DECREMENT,Id}
}

export function shop_reset(Id) {
    return {type: RESET,Id}
}