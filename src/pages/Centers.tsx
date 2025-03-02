
import { RecCenterList } from "@/components/RecCenterList";
import { recCenters } from "@/utils/data";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

const Centers = () => {
    return (
        <Container className="py-8 md:py-12">
            <div className="flex flex-col gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Recreation Centers</h1>
                    <p className="text-muted-foreground">
                        Explore our network of recreation centers offering a variety of amenities and programs for all ages and interests.
                    </p>
                </div>
                <Separator />
                <RecCenterList centers={recCenters} />
            </div>
        </Container>
    );
};

export default Centers;
