import Image from 'next/image';

/**
 * 
 * @param {string} bearerToken -> Authentication Token or Bearer Token that you've get from API.  
 * @param {string} routeName -> Name of the specific route.
 * @returns 
 */
const getAllBooksData = async (bearerToken, routeName) => {
    const apiUrl = process.env.API_URL;

    const response = await fetch(`${apiUrl}/${routeName}`, {
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

export default async function Dashboard() {
    const bearerToken = process.env.BEARER_TOKEN;

    const booksData = await getAllBooksData(
        bearerToken, 
        "books"
    );

    return (
        <main className='py-20'>
            <div className="join px-10 space-x-4">
                <button className="btn join-item rounded-lg bg-green-500 text-gray-50 hover:bg-green-600">Create New Book</button>
            </div>
            {/* Book Card */}
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
                {booksData["data"].map((book) => (
                    <div className=" w-full lg:max-w-full lg:flex">
                        <Image className="h-48 w-2/6 md:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={"/just_wallpaper_fifth.jpeg"} alt='Book Image' title="Book Image"  width={500} height={500} quality={100} />
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className='flex items-center justify-between mb-4'>
                                    <p className="text-gray-900 font-bold text-xl mb-2">{book.title}</p>
                                    <div className='flex flex-row space-x-2'>
                                        <button className="btn join-item rounded-lg bg-yellow-400 text-gray-900 border-none hover:bg-yellow-500">Update</button>
                                        <button className="btn join-item rounded-lg bg-red-500 text-gray-50 border-none hover:bg-red-600">Remove</button>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base">{book.description}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-900 leading-none">Written By: {book.author}</p>
                                <p className="text-gray-600">Published Date: {new Date(book.published).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
        </main>
    )
}