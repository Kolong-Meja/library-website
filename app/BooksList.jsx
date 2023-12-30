import Link from 'next/link';
import Image from 'next/image';

/**
 * 
 *  @param {string} bearerToken -> Authentication Token or Bearer Token that you've get from API. 
 *  @param {number} bookId -> Specific ID of book.
 *  @param {string} routeName -> Name of the specific route.
 */
const getBooksData = async (bearerToken, routeName, bookId) => {
    const response = await fetch(`https://book-crud-service-6dmqxfovfq-et.a.run.app/api/${routeName}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-type': 'application/json',
      },
      cache: 'no-cache',
    });
  
    const booksData = await response.json();
  
    return booksData;
}

export default async function BooksList() {
    const booksData = await getBooksData(
        "888|F4GBAmj8o2yLpqztE2GdUJz7rJZSPjQcnikXjhMW", 
        "books"
    );

    return (
        <section className="py-16 md:py-28 container mx-auto">
            <h1 className="text-center text-2xl font-bold mb-10 text-white md:text-4xl">List of Books</h1>
            <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-3 md:gap-8 md:px-0">
                
                {/* Book Card */}
                {booksData["data"].map((obj) => (
                    <div className="bg-transparent rounded-t-lg overflow-hidden md:max-w-md md:h-min" key={obj.id}>
                        <Link href={"#"}>
                            <Image src='/just_wallpaper_fifth.jpeg' className="w-full h-64 object-cover object-center" title="Image by: John Doe" width={1000} height={1000} quality={100} />
                        </Link>
                        <Link href={`/books/${obj.id}`} className="no-underline" title="List of Book">
                            <div className="px-4 pt-4 mb-2">
                                <h2 className="text-[22px] font-bold mb-2 text-gray-50">
                                    {obj.title}
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[16px] text-gray-50">{obj.subtitle}</p>
                                    <p className="text-[16px] text-gray-50">
                                        <span className="font-semibold">Written By: </span>{obj.author} 
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 flex justify-between items-center mt-auto content-end">
                                <span className="text-gray-50 font-semibold text-sm">{new Date(obj.published).toDateString()}</span>
                                <span className="text-gray-50 font-semibold text-sm">{obj.pages} pages</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}