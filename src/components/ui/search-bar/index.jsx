"use client";
import "@/styles/activities.scss"
import "@/styles/components/activitycard.scss"
import "@/styles/components/searchbar.scss"

import { useState } from "react";
import ActivityCard from "../activity-card";

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