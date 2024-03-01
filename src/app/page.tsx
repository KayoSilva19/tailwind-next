export default function Home() {
  return (
    <div className="p-8 h-screen items-center pt-72 flex flex-col text-center bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <section className="max-w-sizeWeb">
        <h1 className="flex before:w-0.5 before:h-8 before:bg-purple-500 text-2xl sm:text-3xl  lg:text-5xl font-bold gap-3 items-center after:w-0.5 after:h-8 after:bg-purple-500">Rapidly build modern websites without ever leaving your HTML.</h1>

        <p className="mt-6 dark:text-zinc-400">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>

        <button  className="bg-purple-500 dark:bg-purple-400 dark:text-purple-950 py-2 px-4 rounded-md text-slate-50 font-medium
        mt-6 enabled:hover:bg-purple-950 enabled:hover:text-white transition-colors duration-100 disabled:opacity-50 disabled:cursor-not-allowed">
          Sign in
        </button>
      </section>
    </div>
  );
}
