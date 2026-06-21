import PageHeader from "../components/PageHeader";

export default function Author() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="About"
        title="Author"
      />

      <p className="author-tagline">An armchair archaeologist, digging through what's left.</p>

      <div className="author-layout">
        {/* Left column — photo + quick facts */}
        <div className="author-left">
          <div className="author-photo-wrap">
            <img src="/profile.png" alt="Reinwald Marone Valeza" className="author-photo" />
          </div>

          <div className="author-facts-card">
            <p className="author-facts-label">Quick Facts</p>
            <ul className="author-facts-list">
              <li>Reinwald Marone Valeza</li>
              <li>Born October 15, 2005, Caloocan City</li>
              <li>Libra · Wooden Rooster</li>
              <li>Filipino — lived in Canumay East almost his whole life</li>
              <li>Studying Computer Science, with a soft spot for UI/UX and system design</li>
              <li>Hobbies: music, drawing, eating, roleplaying, gossip and story</li>
              <li>Motto: <em>"F*ck it"</em></li>
            </ul>
          </div>
        </div>

        {/* Right column — bio sections */}
        <div className="author-right">
          <section className="author-section">
            <h3 className="author-section-title">Who I Am</h3>
            <p className="author-section-body">
              I'm a computer science student, not an ecologist, not a historian, and definitely not someone with a degree that qualifies me to read a soil classification map. What I do like is UI/UX and system design, work where everything has a clear architecture and a reason it sits where it sits. None of that prepared me for knocking on a barangay office window or sitting my own grandfather down with a notebook. That gap — between what I'm trained to do and what this project actually needed — is basically the whole reason The Dredge exists.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">Why This Project</h3>
            <p className="author-section-body">
              I almost wrote about somewhere else entirely. The original plan was the lagoon inside PUP Manila's campus, but there was not much of an ecosystem left to dig into, so I turned the lens toward home instead. And home has always been tangled up with water, whether I noticed it growing up or not. My house used to be a kangkungan before it got buried under fill. I spent a lot of my childhood staring into the canals near our house, back when we did not have internet at home and the water was basically the entertainment. Those same canals still get dirty and still overflow, and the rain still finds its way into our streets like it remembers something we forgot.
            </p>
            <p className="author-section-body">
              The flooding of 2025 is what actually pushed me to start digging for real. It was scary, genuinely anxiety inducing, especially coming right after 2024, when a lot of our things got destroyed. We were much more ready the second time around, but "more ready for the flood" is still a strange kind of preparedness to need every year. I wanted to know why this keeps happening, not just to my street but to the whole barangay, so I started asking around.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">How the Dredge Got Made</h3>
            <p className="author-section-body">
              The short version: I used what was available to me through the 3S centers, found the nerve to actually sit my grandfather down and interview him properly, and spent a lot of afternoons just walking around Canumay East talking to whoever would talk back. Written out like that it sounds simple, and most of it was — just slower and more enjoyable than I expected going in. The full methodology, sources, and citations live on the Research page. This is the human version of it.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">What Surprised Me</h3>
            <p className="author-section-body">
              Two things stuck with me past the point of being just research notes. The first is hearing, in plain terms from my own grandfather, that the ground under my house used to be a marsh before anyone in my family lived there. You grow up on a piece of land and you just assume it has always been land.
            </p>
            <p className="author-section-body">
              The second is the Kanumai tree, the one the entire barangay is named after. The last one anyone can point to stood roughly where the NLEX overpass sits now, before it disappeared along with everything else that got paved over. As far as I can tell, there is not a single living Kanumai tree left anywhere near here. The barangay carries the name of a species that, locally, no longer exists at all.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">About the Name "The Dredge"</h3>
            <p className="author-section-body">
              Dredging is a literal thing first: clearing silt and debris out of a waterway so it can move again, the same operation the city ran on eleven priority creeks in 2025 once the flooding got bad enough to force it. But it is also what this whole project has been doing in a smaller, slower way: pulling old, buried history back up to the surface, one interview and one soil map at a time. If you landed on this page before you landed on Home, that is more or less what The Dredge means either way.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
