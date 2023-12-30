import Link from 'next/link';
import Image from 'next/image';

/**
 * 
 *  @param {string} bearerToken -> Authentication Token or Bearer Token that you've get from API. 
 *  @param {number} bookId -> Specific ID of book.
 *  @param {string} routeName -> Name of the specific route.
 */
const getBookDataById = async (bearerToken, routeName, bookId) => {
    const response = await fetch(`https://book-crud-service-6dmqxfovfq-et.a.run.app/api/${routeName}/${bookId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-type': 'application/json',
      },
      cache: 'no-cache',
    });
  
    const bookData = await response.json();
  
    return bookData;
}

export default async function BookDetail({ params }) {
    const bookData = await getBookDataById("888|F4GBAmj8o2yLpqztE2GdUJz7rJZSPjQcnikXjhMW", "books", params.id);

    return (
        <main className="flex items-center p-10 w-full h-full bg-transparent">
            <div className="px-5 py-10 grid grid-cols-2 gap-8">
                <div className="flex items-center">
                    <div className="w-full h-4/6 border rounded-lg overflow-hidden" style={{ minHeight: "480px" }}>
                        <Image className="w-full h-full object-cover" width={500} height={300} quality={100} src='/just_wallpaper_fifth.jpeg' alt='My Image' title={`${bookData.title} Image`} />
                    </div>
                </div>
                <div className="flex flex-col justify-start text-gray-50">
                    <div className="flex flex-col gap-4">
                        <Link href={bookData.website} className='no-underline' title={`${bookData.title} URL`}>
                            <h1 className="capitalize text-3xl font-extrabold hover:text-yellow-400 transition-colors duration-300 ease-in-out">{bookData.title}</h1>
                        </Link>
                        <h2 className="text-xl text-gray-300">{bookData.subtitle}</h2>
                        <p className="text-[16px] text-gray-400" title={`${bookData.title} Description`}>{bookData.description}</p>
                        <p className='text-base'><span className='font-bold'>Pages:</span> {bookData.pages} Page</p>
                        <p className='text-base'><span className='font-bold'>Written By:</span> {bookData.author}</p>
                        <p className='text-base'><span className='font-bold'>Publisher:</span> {bookData.publisher}</p>
                    </div>
                </div>
            </div>
        </main>
    )
} 