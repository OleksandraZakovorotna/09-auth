import CreateNote from "@/components/CreateNote/CreateNote";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create New Note",
    description: "Use this form to create a new note. Fill in the title, content, and select a tag before submitting.",
    openGraph: {
        title: "Create New Note",
        description: "Use this form to create a new note. Fill in the title, content, and select a tag before submitting.",
        url: "https://example.com/notes/action/create",
        images: [
            {
                url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                width: 1200,
                height: 630,
                alt: "Create New Note"
            }
        ]
    }
}
export default function CreateNotePage() {
    return <CreateNote />
}