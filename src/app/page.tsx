"use client";

// Importing the main content component from the specific location: src/app/home/main.tsx
import MainContent from "./Home/main"; 

export default function HomePage() {
    // The main content of the home page is now rendered by the imported component
    return <MainContent />;
}
