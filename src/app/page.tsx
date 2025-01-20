import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-12 flex justify-center">
          <Image
            src="/images/cronmiller-crest.png"
            alt="Cronmiller Family Crest"
            width={256}
            height={256}
            className="transform hover:scale-105 transition duration-300"
          />
        </div>
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          The Cronmiller Name: Origins and History
        </h1>
      </div>

      {/* Overview Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Overview of the Surname</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          Like many surnames of Germanic origin, <em>Cronmiller</em> (also found as <em>Cronemiller</em>, 
          <em>Kronmüller</em>, <em>Kronmiller</em>, <em>Gronmüller</em>, etc.) likely began as a 
          descriptive or occupational surname. In German, the word <em>Müller</em> (spelled <em>Mueller</em> or 
          <em>Muller</em> in anglicized form) simply means &quot;miller&quot;—i.e., one who operates or works at a mill.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          Over time, families bearing the name might have spelled it according to local dialects, 
          regional orthography, or later Anglicization (especially after immigration to the United States). 
          The variation in prefixes (Cron–, Kron–, Gron–) suggests either a dialect or an earlier form 
          that shifted over centuries.
        </p>
      </section>

      {/* Origins Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Origins of the Name</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Occupational Origin: Müller (&quot;Miller&quot;)</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg">
            <li>The core of all these variants is <em>Müller</em>, Germany&apos;s most common surname.</li>
            <li>In the Middle Ages (1300s–1500s), as surnames became standardized, many families took or were given the name indicating their trade.</li>
            <li>Thus, <em>Müller</em> lines can often be traced in local parish or civic records back to the 15th or 16th centuries (and in rare cases, earlier).</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">The Prefix Variations</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Kron– or Cron– from &quot;Krone&quot; (Crown)</h4>
              <p className="text-gray-800 text-lg">
                The German word <em>Krone</em> means &quot;crown.&quot; A family might have adopted (or been assigned) 
                <em>Kron-Müller</em> to denote &quot;the miller by the crown&quot; (perhaps referring to a mill 
                located near an inn called <em>Zur Krone</em> [&quot;At the Crown&quot;] or near a place whose 
                emblem was a crown).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Korn– vs. Kron–</h4>
              <p className="text-gray-800 text-lg">
                In some dialects, <em>Korn</em> (&quot;grain&quot;) and <em>Kron</em> (&quot;crown&quot;) can sound similar. 
                One hypothesis is that <em>Cron–</em> might be an older or dialect spelling of <em>Korn</em>, 
                leading to &quot;grain miller.&quot;
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Gron– Variation</h4>
              <p className="text-gray-800 text-lg">
                Sometimes &quot;Gron–&quot; might derive from <em>grün</em> (green) in dialect, or from a toponym 
                (e.g., <em>Gronau</em>, <em>Gronigen</em>, etc.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Historical Timeline</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Late Medieval Period (1300s-1400s)</h3>
            <p className="text-gray-800 text-lg">
              Many German families began adopting surnames in the late Middle Ages. 
              Occupational names like <em>Müller</em> are among the oldest.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Migration to America</h3>
            <p className="text-gray-800 text-lg">
              Large numbers of German-speaking immigrants came to North America in the 18th and 19th centuries. 
              The Cronmillers, like many German immigrants, arrived through Philadelphia, where the name might 
              have been adapted from <em>Kronmüller</em> or <em>Cronmüller</em> to its current form.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Are You a Cronmiller?</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          If you share this surname or have information about its history, we&apos;d love to hear from you. 
          Your story could help us better understand the rich history of the Cronmiller name.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          Drop us a line at{' '}
          <a 
            href="mailto:hello@cronmiller.net" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            hello@cronmiller.net
          </a>
        </p>
      </section>
    </div>
  );
}
