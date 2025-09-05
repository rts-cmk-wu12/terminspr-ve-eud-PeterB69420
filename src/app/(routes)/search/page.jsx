import Heading from "@/components/ui/heading";
import SearchBar from "@/components/ui/search-bar";
import { cookies } from "next/headers";
import "@/styles/searchpage.scss"
import Footer from "@/components/ui/footer";

export const metadata = {
    title: "Søg",
};

export default async function Search() {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token");


    const response = await fetch(`http://localhost:4000/api/v1/activities`, {
        headers: {
            "Authorization": "Bearer" + authToken
        }
    });
    
    const activities = await response.json();
    return (
        <>
            <section className="search">
                <Heading heading="Søg" />
                <SearchBar activities={activities} />
            </section>
            <Footer />
        </>
    );
}