import "@/styles/heading.scss"
import "@/styles/activities.scss"
import Heading from "@/components/ui/heading"

export default async function Activities() {
    const response = await fetch("http://localhost:4000/api/v1/activities")


    const data = await response.json()
    console.log("data", data)

    return (
        <>
        <section className="activities">
            <Heading heading="Aktiviteter" />
        </section>
        </>
    )
}