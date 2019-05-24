import { Book } from 'bookedUp/Book.js';

let theCay = new Book ('The Cay', 'Theodore Taylor', 105, 
'Phillip is excited when the Germans invade the small island of Curaçao. War has always been a game to him, and he’s eager to glimpse it firsthand–until the freighter he and his mother are traveling to the United States on is torpedoed.');

let kafka = new Book ('Kafka on The Shore', 'Haruki Murakami', 505,'Kafka on the Shore is a 2002 novel by Japanese author Haruki Murakami. Its 2005 English translation was among "The 10 Best Books of 2005" from The New York Times and received the World Fantasy Award for 2006.');

let demian = new Book ('Demian', 'Hermann Hesse', 390, "Demian: The Story of Emil Sinclair's Youth is a Bildungsroman by Hermann Hesse, first published in 1919; a prologue was added in 1960. Demian was first published under the pseudonym 'Emil Sinclair', the name of the narrator of the story, but Hesse was later revealed to be the author.");

let bookList = [theCay, kafka, demian];

export { bookList };