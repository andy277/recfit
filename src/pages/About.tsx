
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <Container className="py-12 md:py-16">
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                <div className="space-y-3 animate-fade-in">
                    <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">About RecHub</h1>
                    <p className="text-muted-foreground text-lg">
                        Learn more about our mission and vision
                    </p>
                </div>
                <Separator className="bg-gradient-to-r from-primary/20 to-primary/5" />

                <div className="prose prose-slate max-w-none">
                    <div className="bg-secondary/50 rounded-xl p-6 shadow-sm border border-border/50 hover-scale">
                        <p className="text-lg leading-relaxed">
                            Welcome to RecHub, your go-to resource for discovering recreational centers that match your interests and location. We believe that everyone deserves easy access to activities that enrich their lives, whether it's staying fit, learning new skills, or simply having fun.
                        </p>
                    </div>

                    <div className="mt-10 space-y-6 animate-slide-up">
                        <h2 className="text-2xl font-semibold text-foreground/90 border-l-4 border-primary pl-4">Our Mission</h2>
                        <p className="text-base leading-relaxed">
                            Our mission is to connect you with the perfect recreational center, making it simple to find and engage in activities you love. We aim to:
                        </p>
                        <ul className="list-none space-y-3 my-4">
                            {[
                                "Simplify the search for recreational centers near you.",
                                "Provide personalized recommendations based on your interests.",
                                "Offer up-to-date information on center facilities, programs, and schedules.",
                                "Foster a community of active and engaged individuals."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {index + 1}
                  </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 space-y-6 animate-slide-up" style={{ animationDelay: "150ms" }}>
                        <h2 className="text-2xl font-semibold text-foreground/90 border-l-4 border-primary pl-4">Why We Created RecHub</h2>
                        <p className="text-base leading-relaxed bg-secondary/30 p-4 rounded-md">
                            We noticed that finding the right recreational center can be a time-consuming and frustrating process. Sifting through countless websites and directories, only to find outdated information, was a common problem. That's why we built RecHub – to streamline your search and make it easier than ever to discover the perfect place for your recreational needs.
                        </p>
                    </div>

                    <div className="mt-10 space-y-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
                        <h2 className="text-2xl font-semibold text-foreground/90 border-l-4 border-primary pl-4">Our Team</h2>
                        <p className="text-base leading-relaxed">
                            We're a team of developers and fitness enthusiasts passionate about promoting active and healthy lifestyles. We're dedicated to continuously improving RecHub and providing you with the best possible user experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {["Development", "Design", "Content"].map((role) => (
                                <div key={role} className="bg-secondary/20 rounded-lg p-5 text-center border border-border/50 transition-all hover:shadow-md hover:bg-secondary/30">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-semibold">{role.charAt(0)}</span>
                                    </div>
                                    <h3 className="font-medium">{role} Team</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 space-y-6 animate-slide-up" style={{ animationDelay: "450ms" }}>
                        <h2 className="text-2xl font-semibold text-foreground/90 border-l-4 border-primary pl-4">Get in Touch</h2>
                        <p className="text-base leading-relaxed">
                            We'd love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to contact us.
                        </p>
                    </div>

                    <div className="bg-secondary/50 rounded-xl p-6 mt-8 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                        <h3 className="text-xl font-medium mb-4 text-foreground/90">Contact Information</h3>
                        <div className="space-y-3">
                            <p className="flex items-center gap-2">
                                <span className="font-medium min-w-24">Email:</span>
                                <a href="mailto:info@rechub.com" className="text-primary hover:underline">info@rechub.com</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-medium min-w-24">Phone:</span>
                                <a href="tel:+15551234567" className="hover:text-primary">(555) 123-4567</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-medium min-w-24">Address:</span>
                                <span>123 Recreation Avenue, Fitness City, FC 12345</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
