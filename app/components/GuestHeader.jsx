export default function GuestHeader() {
    return (
        <header className="bg-zinc-900 py-60 border-none">
            <div className="min-h-min min-w-min flex items-center text-center justify-center">
                {/* <img src="{{ asset('images/faisal_daily_blog_transparent.png') }}" alt="Faisal Daily Blog Logo" /> */}
                <div className="flex flex-col space-y-4">
                    <p className="text-3xl font-semibold">Welcome To Library Website</p>
                    <p className="font-medium text-base">Where you can find list of books.</p>
                </div>
            </div>
        </header>
    )
}