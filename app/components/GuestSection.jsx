import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { getServerSideProps } from '../page';

export default function GuestSection() {
    return (
        <section className="py-16 md:py-28 container mx-auto">
            <h1 className="text-center text-2xl font-bold mb-10 text-white md:text-4xl">List of Books</h1>
            <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-3 md:gap-8 md:px-0">
                
                {/* First Card */}
                <div className="bg-transparent rounded-t-lg overflow-hidden md:max-w-md md:h-min">
                    <Link href={"#"}>
                        <Image src='/just_wallpaper_fifth.jpeg' className="w-full h-64 object-cover object-center" title="Image by: John Doe" width={1000} height={1000} quality={100} />
                    </Link>
                    <Link href={"#"} className="no-underline" title="List of Book">
                        <div className="px-4 pt-4 mb-2">
                            <h2 className="text-[22px] font-bold mb-2 text-gray-50">
                                Title of book
                            </h2>
                            <div className="space-y-4">
                                <p className="text-[16px] text-gray-50">Subtitle of book</p>
                                <p className="text-[16px] text-gray-50">
                                    <span className="font-semibold">Written By: </span>Author Name 
                                </p>
                            </div>
                        </div>
                        <div className="p-4 flex justify-between items-center mt-auto content-end">
                            <span className="text-gray-50 font-semibold text-sm">Published Date</span>
                            <span className="text-gray-50 font-semibold text-sm">Total Pages</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
} 

// export default async function GuestSection({ booksData }) {
//     const [booksData, setBooksData] = React.useState([]);
    
//     React.useEffect(() => {
//         async function fetchBooks() {
//             try {
//                 const data = await getServerSideProps();
//                 setBooksData(data);
//             } catch (error) {
//                 console.error(`Error fetching books data: ${error}`);
//             }
//         }

//         fetchBooks();
//     }, []);

//     return (
//         <div>
//             {booksData.map((book, index) => (
//                 <div key={index}>{JSON.stringify(book)}</div>
//             ))}
//         </div>
//     )
// }