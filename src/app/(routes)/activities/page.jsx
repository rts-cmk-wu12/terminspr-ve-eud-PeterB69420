import "@/styles/activities.scss"
import Heading from "@/components/ui/heading"
import Footer from "@/components/ui/footer";
import ActivityCard from "@/components/ui/activity-card";

export const metadata = {
    title: "Aktiviteter",
};


export default async function Activities() {
    const response = await fetch("http://localhost:4000/api/v1/activities")


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