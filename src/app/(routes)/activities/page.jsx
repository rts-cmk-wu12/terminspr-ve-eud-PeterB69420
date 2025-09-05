import "@/styles/activities.scss"
import Heading from "@/components/ui/heading"
import Footer from "@/components/ui/footer";
import ActivityCard from "@/components/ui/activity-card";
import { cookies } from "next/headers";

export const metadata = {
    title: "Aktiviteter",
};


export default async function Activities() {

    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token");

    
    const response = await fetch(`http://localhost:4000/api/v1/activities`, {
        headers: {
            "Authorization": "Bearer" + authToken
        }
    });



    const data = await response.json()
    console.log("data", data)

    return (
        <>
            <section className="activities">
                <Heading heading="Aktiviteter" />
                <section className="activities__section">
                    <div className="activities__section-list">
                        {data.map((activities) => (
                            <ActivityCard key={activities.id} activity={activities} />
                        ))}
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}