import "@/styles/welcomepage.scss"
import Link from "next/link";

export const metadata = {
  title: "Velkommen",
};


export default async function Welcome() {
    return (
        <>
        <section className="welcome-section">
          <div className="welcome-section__title">
            <h1 className="welcome-section__heading">landrup</h1>
            <p className="welcome-section__paragraph">dans</p>
          </div>
            <div className="welcome-section__button-wrap">
              <Link href="/activities" className="welcome-section__button">Kom i gang</Link>
            </div>
        </section>
        </>
    )
}
