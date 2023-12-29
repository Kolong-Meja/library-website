"use client";

// components
import GuestHeader from "./components/GuestHeader"
import GuestSection from "./components/GuestSection"
import GuestFooter from "./components/GuestFooter"

export default function Home() {
  return (
    <div>
        <GuestHeader />
        <GuestSection />
        <GuestFooter />
    </div>
  )
}

// fetch api
// export async function getServerSideProps() {
//   const bearerToken = "668|tjwuYG7ExOsSOulnDIncpXGD1icBrwQyyIpq0uSJ";

//   try {
//       const response = await fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books", {
//           method: 'GET',
//           headers: {
//               Authorization: `Bearer ${bearerToken}`,
//               'Content-type': 'application/json',
//           },
//       });

//       if (response.ok) {
//           const booksData = await response.json();
//           return {
//               props: {
//                   booksData,
//               },
//           };
//       } else {
//           throw new Error(`Failed to fetch books data. Status: ${response.status}`);
//       }
//   } catch (error) {
//       console.error(`Error fetching books data: ${error}`);
//       return {
//           props: {
//               booksData: [],
//           },
//       };
//   }
// }

