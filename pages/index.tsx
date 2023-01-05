import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fran Bosquet</title>
        <meta name="description" content="Blog de Fran Bosquet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-to-b from-gray-800 to-gray-700 min-h-screen text-gray-200">
        <header className='p-4 flex items-center gap-2'>
          <h1 className='text-2xl'>Fran<span className='text-violet-400'>Bosquet</span></h1>
          <p className='text-gray-500 text-sm hidden md:block'>Mi blog personal</p>
        </header>
      </section>
    </>
  )
}
