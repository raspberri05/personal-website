import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectCard(props: {
    name: string;
    description: string;
    href: string;
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{props.description}</p>
            </CardContent>
            <CardFooter>
                <a href={props.href} target="_blank">
                    <Button variant="link">View on Github</Button>
                </a>
            </CardFooter>
        </Card>
    );
}
