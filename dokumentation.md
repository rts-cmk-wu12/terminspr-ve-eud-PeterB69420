# Dokumentation for Landrup Dans
Peter Oliver Neumann Bransner, WU12

## Sådan kommer du i gang
`npm install`

`npm run dev`

## Tech-stack
* **Next.js**
Next.js er et front-end framework baseret på React.js som også giver adgang til server-side components og mappebaseret routing. Server-side components og funktioner giver bedre sikkerhed, fordi koden afvikles på serveren fremfor i klienten.

* **React**
React er et bibliotek der giver mig mulighed for at lave components og håndtere states på en let måde. React har et stort fællesskab og et stort modul-bibliotek, som er aktivt, vel-dokumenteret og vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor.

* **SASS**
SASS er en mere avanceret og udviklet version af CSS kodesproget. SCSS giver en lov til at bruge variabler og nesting, det gør at ens kode overordnet set ser mere overskuelig og pænere ud. Jeg kan opdele min CSS og i modules og genbruge kode andre steder.

* **React-icons**
Er et bibliotek som giver adgang til SVG ikoner for react applikationer.

* **Zod**
Zod er et valideringsbibliotek til objekter og string. Jeg bruger Zod til bland andet at validere bruger-input i formularer.
## Kodeeksempel

Search bar component (@/components/ui/search-bar)

```jsx
export default function SearchBar({ activities }) {
    const [query, setQuery] = useState("")

    const filtered =
        query.trim().length > 0
            ? activities.filter((activity) =>
                activity.name.toLowerCase().includes(query.toLowerCase())
            )
            : [];

    return (
        <>
            <section className="activities-search__section">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Søg efter aktiviteter"
                    className="activities__search"
                    id="activity-search"
                    name="search"
                />
                <section className="activities__section">
                <div className="activities__section-list">
                    {filtered.length > 0 ? (
                        filtered.map((activity) => (
                            <ActivityCard key={activity.id} activity={activity} />
                        ))
                    ) : (
                        <p className="activity-search__no-results">Ingen aktiviteter fundet</p>
                    )}
                </div>
                </section>
            </section>
        </>
    )
}
```
Jeg kalder en react hook "useSate" hvilket er en funktion som retunerer et array. Arrayet har 2 elementer, et state og en sætter til dette state. Når brugeren skriver i mit input felt bliver 