export default function NameHistory() {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section with Crest */}
        <div className="text-center mb-12">
          <img 
            src="/images/cronmiller-crest.png"
            alt="Cronmiller Family Crest"
            className="mx-auto mb-8 w-48 h-auto"
          />
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            The Cronmiller Name: A Journey Through Time
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A proud heritage combining nobility ("Krone" - crown) with craftsmanship ("Müller" - miller), 
            symbolized by our family crest featuring a traditional windmill.
          </p>
        </div>
        
        {/* Etymology Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Etymology</h2>
          <p className="text-gray-800 mb-4 text-lg">
            The surname Cronmiller combines two German elements, reflected in our family crest:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Cron/Kron</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Derived from Middle High German "krone," meaning "crown" (represented by the helmet crown in our crest) 
                or possibly from "kran/krane" meaning "crane" (the bird). This prefix was often associated 
                with distinguished or notable members of a trade.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Miller/Müller</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                An occupational surname meaning "miller" - symbolized by the windmill in our crest. 
                This was a crucial profession in medieval German communities, as millers 
                processed grain into flour for bread.
              </p>
            </div>
          </div>
        </section>
  
        {/* Historical Timeline */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Historical Timeline</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1700s - German Origins</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Early records show the name in various forms, including "Kronmüller," 
                "Gronmuller," and "Cronmiller." The family was established in German-speaking regions,
                with records dating back to the early 18th century.
              </p>
            </div>
  
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Early 1800s - Immigration</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Family members began immigrating to America, with several Cronmillers 
                arriving during this period. While many German surnames were anglicized,
                our name saw various spellings including Gronmuller and Cronmiller.
              </p>
            </div>
  
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1850s-1870s - American Establishment</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                The families established themselves in various parts of America,
                particularly in agricultural and industrial areas where their milling
                expertise could be put to use.
              </p>
            </div>
          </div>
        </section>
  
        {/* Name Variants */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Historical Name Variations</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold text-gray-900">Kronmüller</h3>
              <p className="text-gray-800">Original German spelling</p>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold text-gray-900">Gronmuller</h3>
              <p className="text-gray-800">Early variant spelling</p>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold text-gray-900">Cronmuller</h3>
              <p className="text-gray-800">Transitional spelling</p>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <h3 className="font-semibold text-gray-900">Cronmiller</h3>
              <p className="text-gray-800">Modern American spelling</p>
            </div>
          </div>
        </section>
      </div>
    );
  }