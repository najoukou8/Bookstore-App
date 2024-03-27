

export interface Book {
    title: string;
    author: string;
    price: string;
    imageUrl: string;
    category: string;
}

export function navigateToBookDetails(navigation: any, book: Book) {
    navigation.navigate('BookDetails',{ book });
}

export default navigateToBookDetails;

