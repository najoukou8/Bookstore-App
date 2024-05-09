import { Book } from "../types/book";



export function navigateToBookDetails(navigation: any, book: Book) {
    navigation.navigate('BookDetails',{ book });
}

export function navigateToCart(navigation: any, book: Book) {
    navigation.navigate('Cart',{ book });
}


export default navigateToBookDetails;

