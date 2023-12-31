import AdminLayout from "./admin/dashboard/layout"
import GuestLayout from "./layout"

export default function MyApp({ Component, pageProps, router }) {
    const getLayout = (page) => {
        if (page !== '/admin/') {
            return <AdminLayout>{page}</AdminLayout>
        }

        return <GuestLayout>{page}</GuestLayout>
    };

    const Layout = getLayout(router.asPath);

    return <Layout>{<Component {...pageProps} />}</Layout>; 
}