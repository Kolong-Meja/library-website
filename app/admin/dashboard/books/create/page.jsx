export default function CreateBook() {
    return (
        <main className="py-16">
            <div className="min-h-screen flex justify-center items-center">
                <div className="lg:w-2/4 md:w-2/3 w-full px-10 md:px-0 lg:px-0 py-2">
                    <form id="register-form" className="bg-gray-50 p-10 rounded-lg shadow-lg min-w-full" method="POST">
                        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Create New Book</h1>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="isbn">ISBN</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="text" name="isbn" id="isbn" placeholder="isbn" required/>
                            
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="title">Title</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="text" name="title" id="title" placeholder="The title" required/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="subtitle">Subtitle</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="text" name="subtitle" id="subtitle" placeholder="The subtitle" required/>
                            
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="author">Author</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="text" name="author" id="author" placeholder="Author name" required/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="published">Published</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="date" name="published" id="published" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="publisher">Publisher</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="text" name="publisher" id="publisher" placeholder="Publisher name" required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="pages">Pages</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="number" name="pages" id="pages" defaultValue={0} required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="password_confirmation">Description</label>
                            <textarea className="block p-2.5 bg-gray-100 text-gray-900 resize-y rounded-lg" name="description" id="description" cols="30" rows="10" placeholder="Description of the book..." required />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-800 font-semibold block my-2 text-md" htmlFor="websiteUrl">Website URL</label>
                            <input className="w-full bg-gray-100 px-4 py-2 text-gray-900 rounded-lg focus:outline-none" type="text" name="websiteUrl" id="websiteUrl" placeholder="URL of the book" autoComplete="url" required />
                        </div>
                        <button type="submit" className="w-full mt-6 bg-green-600 rounded-lg px-4 py-2 text-lg text-gray-50 tracking-wide font-semibold font-sans">Submit</button>
                        <button type="reset" className="w-full mt-6 bg-red-500 rounded-lg px-4 py-2 text-lg text-gray-50 tracking-wide font-semibold font-sans">Reset</button>
                    </form>
                </div>
            </div>
        </main>
    )
}