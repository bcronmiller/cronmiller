import Image from 'next/image';

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
        <h1 className="text-4xl font-bold mb-8 text-gray-100">
          The Cronmiller Name: Origins and History
        </h1>
      </div>

      {/* Overview Section */}
      <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Overview of the Surname</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Like many surnames of Germanic origin, <em>Cronmiller</em> (also found as <em>Cronemiller</em>,
          <em>Kronmüller</em>, <em>Kronmiller</em>, <em>Gronmüller</em>, etc.) likely began as a descriptive 
          or occupational surname. In German, the word <em>Müller</em> (spelled <em>Mueller</em> or <em>Muller</em> 
          in anglicized form) simply means &quot;miller&quot;—i.e., one who operates or works at a mill.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Over time, families bearing the name might have spelled it according to local dialects, regional orthography, 
          or later Anglicization (especially after immigration to the United States). The variation in prefixes (Cron–, Kron–, Gron–) 
          suggests either a dialect or an earlier form that shifted over centuries.
        </p>
      </section>

      {/* Origins of the Name Section */}
      <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Origins of the Name</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-100">Occupational Origin: Müller (&quot;Miller&quot;)</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 text-lg">
            <li>The core of all these variants is <em>Müller</em>, Germany&apos;s most common surname.</li>
            <li>In the Middle Ages (1300s–1500s), as surnames became standardized, many families took or were given the name indicating their trade.</li>
            <li>Thus, <em>Müller</em> lines can often be traced in local parish or civic records back to the 15th or 16th centuries (and in rare cases, earlier).</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-100">The Prefix Variations</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-100 mb-2">Kron– or Cron– from &quot;Krone&quot; (Crown)</h4>
              <p className="text-gray-300 text-lg">
                The German word <em>Krone</em> means &quot;crown.&quot; A family might have adopted (or been assigned)
                <em>Kron-Müller</em> to denote &quot;the miller by the crown&quot; (perhaps referring to a mill 
                located near an inn called <em>Zur Krone</em> [&quot;At the Crown&quot;] or near a place whose 
                emblem was a crown).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-100 mb-2">Korn– vs. Kron–</h4>
              <p className="text-gray-300 text-lg">
                In some dialects, <em>Korn</em> (&quot;grain&quot;) and <em>Kron</em> (&quot;crown&quot;) can sound similar. 
                One hypothesis is that <em>Cron–</em> might be an older or dialect spelling of <em>Korn</em>, 
                leading to &quot;grain miller.&quot;
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-100 mb-2">Gron– Variation</h4>
              <p className="text-gray-300 text-lg">
                Sometimes &quot;Gron–&quot; might derive from <em>grün</em> (green) in dialect, or from a toponym 
                (e.g., <em>Gronau</em>, <em>Gronigen</em>, etc.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-100">Historical Timeline</h2>
        <div className="relative border-l-4 border-blue-600 pl-6">
          {/* Medieval Roots */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-100">Medieval Roots and the Evolution of Surnames</h3>
            <p className="text-gray-300 text-lg">
              <strong>13th–15th Centuries:</strong> While many families in German-speaking lands adopted surnames in the late Middle Ages (1300s–1400s), some localities or social groups began doing so slightly earlier or later. 
              Occupational names (like Müller) were among the most widespread because many people were designated by their trade or craft.
            </p>
            <p className="text-gray-300 text-lg">
              <strong>15th–16th Centuries:</strong> Regional dialects and inconsistent spelling conventions caused variations such as Kronmüller, Cronmüller, or Gronmüller. These variations might reflect the place a family lived (for instance, near a mill called Krone, &quot;crown&quot;) or the preference of local scribes who wrote the name as they heard it.
            </p>
          </div>

          {/* Early Modern Period */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-100">Early Modern Period Developments</h3>
            <p className="text-gray-300 text-lg">
              <strong>16th–17th Centuries:</strong> Central Europe, especially the Holy Roman Empire, was fragmented into numerous states and principalities. Record-keeping varied from region to region. Church registers (baptism, marriage, burial) began in some areas in the 1500s or early 1600s—this can be a key time to find your family name in written form.
            </p>
            <p className="text-gray-300 text-lg">
              Wars (like the Thirty Years&apos; War, 1618–1648) devastated large parts of Germany and sometimes forced families to relocate, which could lead to new name variants in new regions.
            </p>
            <p className="text-gray-300 text-lg">
              <strong>Guilds and Milling:</strong> Millers often belonged to trade guilds, which kept member records. These guild documents (where surviving) can date back to the 1500s or 1600s. You might see Kronmüller/Cronmüller in guild rosters or tax rolls.
            </p>
          </div>

          {/* Migration to America */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-100">Migration to America: 1700s–1800s</h3>
            <p className="text-gray-300 text-lg">
              <strong>18th Century (1700s):</strong> Significant waves of German-speaking immigrants—often called &quot;Palatines&quot; generically—arrived in British North America. Pennsylvania, and specifically Philadelphia, was the main entry point for many. The Pennsylvania &quot;Dutch&quot; (a corruption of &quot;Deutsch&quot;) community included immigrants from other German states.
            </p>
            <p className="text-gray-300 text-lg">
              Names were often written down by port officials and thus became &quot;frozen&quot; in Anglicized forms—e.g., Kronmüller to Cronmiller or Crownmiller.
            </p>
            <p className="text-gray-300 text-lg">
              <strong>19th Century (1800s):</strong> Economic hardship, political upheaval, and cheap land in the U.S. encouraged migration, solidifying &quot;Cronmiller&quot; as a durable form of the name in records.
            </p>
          </div>

          {/* Modern Era */}
          <div>
            <h3 className="text-xl font-semibold text-gray-100">Modern Era</h3>
            <p className="text-gray-300 text-lg">
              <strong>20th Century to Present:</strong> More uniform record-keeping introduced in the 19th and early 20th centuries made the name consistently spelled within local and family lines.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Are You a Cronmiller?</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          If you share this surname or have information about its history, we&apos;d love to hear from you. 
          Your story could help us better understand the rich history of the Cronmiller name.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Drop us a line at{' '}
          <a 
            href="mailto:hello@cronmiller.net" 
            className="text-blue-400 hover:text-blue-300 underline"
          >
            hello@cronmiller.net
          </a>
        </p>
      </section>
    </div>
  );
}
