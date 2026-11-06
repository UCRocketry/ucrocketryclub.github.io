import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-24">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(224,1,34,0.16),transparent_70%)]"
      />
      <Container className="relative text-center">
        <p className="eyebrow justify-center">Telemetry lost</p>
        <h1 className="mt-6 font-display text-7xl font-bold sm:text-8xl">404</h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
          This page did not survive recovery. Nothing at this address — let&rsquo;s get you back
          to the pad.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/projects" variant="secondary">
            See our projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
