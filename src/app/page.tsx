export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center py-25 px-16 sm:items-start sm:flex-row">
      <section className="flex flex-col items-start w-1/2">
        <h1 className="text-5xl font-bold sm:text-6xl">
          <span>Hi, I&apos;m </span>
          <span className="text-primary">Nishat</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          I&apos;m a full-stack software engineer who likes to build things that
          are both functional and beautiful.
        </p>
      </section>
      <section className="flex flex-col items-start w-1/2">Visual</section>
    </main>
  );
}
