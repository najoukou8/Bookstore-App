import { Book } from "../types/book";



export function navigateToBookDetails(navigation: any, book: Book) {
    navigation.navigate('BookDetails',{ book });
}

export default navigateToBookDetails;

