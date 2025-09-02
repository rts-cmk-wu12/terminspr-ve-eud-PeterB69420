"use client";
import "@/styles/components/heading.scss"

export default function Heading({ heading }) {


    return (
        <header className="heading">
            <h1 className="heading__title">{heading}</h1>
        </header>
    )
}
