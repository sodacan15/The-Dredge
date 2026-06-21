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
        <div className="author-left">
          <div className="author-photo-wrap">
            <img src="/author-photo.png" alt="Reinwald Marone Valeza" className="author-photo" />
          </div>

          <div className="author-facts-card">
            <p className="author-facts-label">Quick Facts</p>
            <ul className="author-facts-list">
              <li>Reinwald Marone Valeza</li>
              <li>Born October 15, 2005 · Caloocan City</li>
              <li>Libra · Wooden Rooster</li>
              <li>Canumay East resident, basically his whole life</li>
              <li>Computer Science — UI/UX &amp; system design</li>
              <li>Music · drawing · eating · roleplaying · gossip &amp; story</li>
              <li>Motto: <em>"F*ck it"</em></li>
            </ul>
          </div>

          <div className="author-callout">
            "I'm not an ecologist. I'm a guy who grew up staring into a canal and eventually decided to look it up."
          </div>
        </div>

        <div className="author-right">
          <section className="author-section">
            <h3 className="author-section-title">Who I Am</h3>
            <p className="author-section-body">
              Twenty years old. Computer science student. Born in Caloocan and deposited in Canumay East before I was old enough to have an opinion about it, and I've been here since. I like UI/UX and system design — things with clear architecture, where everything has a reason it sits where it sits, and you can trace the logic backward from any decision. The Dredge is the opposite of all of that. There's no clean structure to a wetland that got paved over and half-forgotten. The data is oral, the maps are decades out of date, and the eleven creeks I'm trying to account for don't appear anywhere in Valenzuela City's current waterway database.
            </p>
            <p className="author-section-body">
              I'm also not a scientist, a historian, a geographer, or a journalist. I'm someone who grew up on this specific patch of earth, got curious about what was under it, and wrote it all down. That's the complete description.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">Why This Project</h3>
            <p className="author-section-body">
              I almost wrote about somewhere else. The original plan was the lagoon inside PUP Manila's main campus — I did early research, liked the direction — but there wasn't much of an ecosystem left to write about, which, now that I think about it, was probably worth writing about in itself. Instead I turned the lens toward home, which has always been tangled up with water whether I thought about it or not.
            </p>
            <p className="author-section-body">
              Before we had consistent internet at home, I spent a significant portion of my childhood staring into the canal near our house. There were tadpoles in it once, before it got concreted. I didn't think about that for years. Then I was looking at a soil classification map for this project, and it just clicked: the water was supposed to be there. The concrete was the recent decision. The marsh was the original architecture. And once you start thinking about it that way, you can't really stop.
            </p>
            <p className="author-section-body">
              The 2024 flooding destroyed some of our things. 2025 came and we handled it better — "better" meaning nothing was destroyed that time, not that the problem is solved. That distinction matters. This project started when I got tired of treating the flooding like weather and started treating it like evidence.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">The Grandfather Interview</h3>
            <p className="author-section-body">
              I'll be honest: I'm scared of my grandfather. He's not a cruel man, but he's the kind of person you go quiet around — you don't push, you don't ask much, you read the room and adjust. We don't have the kind of relationship where I'd bring out a notebook and start asking questions out of curiosity. For this project, I did exactly that.
            </p>
            <p className="author-section-body">
              He told me, without much ceremony, that the ground under our house used to hold hito, dalag, and samaral. He named the plants — kangkong, gabi, cogon at the edges. He confirmed the water table was close enough that you could dig a well from inside the living room floor and find it. He described a functioning wetland from memory, and he thought he was just answering a question about old times. I was writing down primary ecological evidence and trying not to let it show on my face.
            </p>
            <p className="author-section-body">
              That gap — between what people carry casually and what counts as historical record — is the whole problem The Dredge is trying to address.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">What Surprised Me</h3>
            <p className="author-section-body">
              The creek names were still in the barangay profile. Eleven sapang, all listed, with names like "Creek Blocked from the Sun" and "Creek of the Mangrove Nesting Ground." Someone put those into an official document. Nobody followed up on them — not the city government, not DENR, not anyone. They sit in a physical file in the barangay hall, doing nothing. That's not an accusation, it's just what happened, and it's strange to look at.
            </p>
            <p className="author-section-body">
              The second thing: how much I still don't want to leave this place, even after learning everything I've learned about it. Log ??? covers this more honestly than I can here. But there's something uncomfortable about researching a place this thoroughly and coming out the other end understanding it more — not less. Understanding a thing and staying in it are different from understanding it and needing to leave. I'm still figuring out which one I'm doing.
            </p>
          </section>

          <section className="author-section">
            <h3 className="author-section-title">About the Name</h3>
            <p className="author-section-body">
              Dredging is what you do when a waterway fills with silt and you need it to move again. Valenzuela City ran actual dredging operations on eleven priority creeks in August 2025, after the NLEX flooded and couldn't be ignored. This project does the same thing slower, and without the excavator: pulling what's buried back to the surface, one interview and one soil map at a time.
            </p>
            <p className="author-section-body">
              It started as a CS final project. It became harder to categorize. I'm going to call it an archive, leave it at that, and not overthink the label.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
