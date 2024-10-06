import { Button } from "@/components/ui/button";

export function NavBar() {
    return (
        <div className="flex justify-center gap-[10px] py-2">
            <a href="/">
                <Button variant="link">Home</Button>
            </a>
            <a href="/about">
                <Button variant="link">About</Button>
            </a>
            <a href="/projects">
                <Button variant="link">Projects</Button>
            </a>
        </div>
    );
}
