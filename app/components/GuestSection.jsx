import Link from 'next/link';
import Image from 'next/image';

export default function GuestSection() {
    const sectionTitle = "List of Books";

    return (
        <section className="py-16 md:py-28 container mx-auto">
            <h1 class="text-center text-2xl font-bold mb-10 text-white md:text-4xl">{sectionTitle}</h1>
            <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-3 md:gap-8 md:px-0">
                
                {/* First Card */}
                <div className="bg-transparent rounded-t-lg overflow-hidden md:max-w-md md:h-min">
                    <Link href={"#"}>
                        <Image src='/just_wallpaper_fifth.jpg' className="w-full h-64 object-cover object-center" title="Image by: John Doe" width={1000} height={1000} />
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

                {/* Second Card */}
                <div className="bg-transparent rounded-t-lg overflow-hidden md:max-w-md md:h-min">
                    <Link href={"#"}>
                        <Image src='/just_wallpaper_fifth.jpg' className="w-full h-64 object-cover object-center" title="Image by: John Doe" width={1000} height={1000} />
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
                
                {/* Last Card */}
                <div className="bg-transparent rounded-t-lg overflow-hidden md:max-w-md md:h-min">
                    <Link href={"#"}>
                        <Image src='/just_wallpaper_fifth.jpg' className="w-full h-64 object-cover object-center" title="Image by: John Doe" width={1000} height={1000} />
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