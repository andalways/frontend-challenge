import React from 'react';
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div className="container flex items-center mx-auto justify-center">
            <Hero src="/images/hero-example.png" />
        </div>
    )
}