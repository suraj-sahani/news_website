import { Article } from "./types";

export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    slug: "ai-reshaping-newsroom",
    category: "Tech",
    title: "The Quiet Revolution: How AI Is Reshaping the Newsroom",
    description:
      "Inside the editorial floors where algorithms now draft headlines, surface leads, and quietly redraw the boundaries of modern journalism.",
    author: { name: "Eleanor Hayes", avatar: "/article/author.jpg" },
    date: "March 14, 2026",
    readTime: "8 min read",
    heroImage: "/article/article-1.jpg",
    figureCaption:
      "Photograph: Growtika / Unsplash — A neural network visualization inside a modern editorial workspace.",
    body: [
      {
        type: "paragraph",
        text: "In the dim hours before dawn, the newsroom hums with a different kind of energy. Where copy editors once squinted at proofs, machine-learning models now scan thousands of incoming wire reports...",
      },
      {
        type: "paragraph",
        text: "For decades, the architecture of a newsroom was a study in human hierarchy — reporters feeding editors, editors feeding the front page. Today, that pipeline is increasingly mediated by software.",
      },
      {
        type: "quote",
        text: "The machines didn't replace our judgment — they amplified it, and in doing so, forced us to ask what judgment really means.",
      },
      { type: "heading", text: "When Speed Meets Scrutiny" },
      {
        type: "paragraph",
        text: "Yet the promise of automation carries an undercurrent of unease. Editors describe a growing tension between the relentless pace these tools enable and the slower, deliberative work.",
      },
    ],
    related: [
      {
        title: "The Hidden Cost of Always-On Computing",
        date: "Mar 11, 2026",
        image: "/article/article-2.jpg",
      },
      {
        title: "Inside the Lab Teaching Machines to Reason",
        date: "Mar 9, 2026",
        image: "/article/article-3.jpg",
      },
      {
        title: "Why Local News Is Betting on Automation",
        date: "Mar 6, 2026",
        image: "/article/article-4.jpg",
      },
    ],
  },
  {
    id: "2",
    slug: "quantum-leap-encryption",
    category: "Tech",
    title: "The Quantum Leap: Preparing for the End of Encryption",
    description:
      "As quantum processors reach stability, the cryptographic foundations of the modern internet face an existential deadline.",
    author: { name: "Marcus Thorne", avatar: "/article/author.jpg" },
    date: "March 12, 2026",
    readTime: "12 min read",
    heroImage: "/article/article-2.jpg",
    figureCaption:
      "Digital render of a superconducting qubit array in a dilution refrigerator.",
    body: [
      {
        type: "paragraph",
        text: "We are currently living in the 'Harvest Now, Decrypt Later' era. Adversaries are stockpiling encrypted data today, waiting for the hardware that can break it tomorrow.",
      },
      { type: "heading", text: "The Post-Quantum Transition" },
      {
        type: "paragraph",
        text: "The race is no longer just about building a computer; it's about rewriting the math that protects our global financial systems.",
      },
      {
        type: "quote",
        text: "Security is a moving target, but quantum computing is the first time the target has moved at the speed of light.",
      },
    ],
    related: [
      {
        title: "IBM's 5000-Qubit Milestone",
        date: "Feb 28, 2026",
        image: "/article/article-1.jpg",
      },
      {
        title: "The Math Behind Lattice Cryptography",
        date: "Jan 15, 2026",
        image: "/article/article-3.jpg",
      },
      {
        title: "Why Cyber-Insurance is Getting Expensive",
        date: "Dec 10, 2025",
        image: "/article/article-4.jpg",
      },
    ],
  },
  {
    id: "3",
    slug: "silicon-valley-water-crisis",
    category: "Tech",
    title: "Thirsty Giants: Silicon Valley's Hidden Water Crisis",
    description:
      "As data centers expand to meet AI demands, the massive cooling requirements are putting an unprecedented strain on local aquifers.",
    author: { name: "Julian Vance", avatar: "/article/author.jpg" },
    date: "March 10, 2026",
    readTime: "10 min read",
    heroImage: "/article/article-3.jpg",
    figureCaption:
      "Photograph: Aerial view of a massive server farm cooling infrastructure in the high desert.",
    body: [
      {
        type: "paragraph",
        text: "Behind every seamless AI interaction lies a physical reality: thousands of humming servers generating immense heat. To keep these digital brains from melting, companies are pumping millions of gallons of water through cooling systems every day.",
      },
      { type: "heading", text: "The Cost of Computation" },
      {
        type: "paragraph",
        text: "In semi-arid regions where many of these facilities are built, the competition for water between tech giants and local agriculture has reached a breaking point. What was once an invisible utility has become a geopolitical flashpoint.",
      },
      {
        type: "quote",
        text: "We are effectively exporting our groundwater into the cloud, and once it's gone, no algorithm can bring it back.",
      },
      {
        type: "paragraph",
        text: "Engineers are now racing to develop 'closed-loop' systems and liquid cooling technologies that could reduce the footprint, but the rate of expansion is currently outpacing the rate of innovation.",
      },
    ],
    related: [
      {
        title: "Nuclear Power: The New Data Center Battery?",
        date: "Feb 20, 2026",
        image: "/article/article-1.jpg",
      },
      {
        title: "Sustainable Cooling Trends for 2027",
        date: "Jan 12, 2026",
        image: "/article/article-2.jpg",
      },
      {
        title: "The Desert's Digital Oasis",
        date: "Dec 05, 2025",
        image: "/article/article-4.jpg",
      },
    ],
  },
  {
    id: "4",
    slug: "neural-link-ethics",
    category: "Tech",
    title: "The Final Frontier: The Ethics of Cognitive Liberty",
    description:
      "As Brain-Computer Interfaces (BCI) move from clinical trials to consumer prototypes, the concept of mental privacy is being rewritten.",
    author: { name: "Dr. Aris Thorne", avatar: "/article/author.jpg" },
    date: "March 08, 2026",
    readTime: "15 min read",
    heroImage: "/article/article-4.jpg",
    figureCaption:
      "Illustration: High-resolution mapping of synaptic pathways via a non-invasive neural mesh.",
    body: [
      {
        type: "paragraph",
        text: "For the first time in human history, the barrier between internal thought and external data is thinning. While BCIs offer miraculous hope for those with paralysis, they also open a window into our most private sanctuary: the mind.",
      },
      { type: "heading", text: "Hacking the Inner Monologue" },
      {
        type: "paragraph",
        text: "The legal framework for 'neurorights' is currently non-existent. If a device can interpret your intent to click a button, can it also be used to harvest your subconscious reactions to advertisements or political messaging?",
      },
      {
        type: "quote",
        text: "The last private space we owned was the six inches between our ears. We are about to lease that space to the highest bidder.",
      },
      {
        type: "paragraph",
        text: "Activists are calling for an international treaty on cognitive liberty, ensuring that neural data is treated with the same—or greater—sanctity as medical records.",
      },
    ],
    related: [
      {
        title: "Telepathy 1.0: A Product Review",
        date: "Feb 15, 2026",
        image: "/article/article-1.jpg",
      },
      {
        title: "The Neuro-Inequality Gap",
        date: "Jan 30, 2026",
        image: "/article/article-2.jpg",
      },
      {
        title: "Biometric Laws in the Age of AI",
        date: "Jan 05, 2026",
        image: "/article/article-3.jpg",
      },
    ],
  },
  {
    id: "5",
    slug: "synthetic-reality-evidence",
    category: "Tech",
    title: "The Death of Evidence: Truth in the Age of Synthetic Video",
    description:
      "In a world where hyper-realistic video can be generated in real-time, the judicial system is struggling to define what constitutes 'proof.'",
    author: { name: "Sarah Jenkins", avatar: "/article/author.jpg" },
    date: "March 05, 2026",
    readTime: "9 min read",
    heroImage: "/article/article-1.jpg",
    figureCaption:
      "Digital render: A distorted mirror reflecting a pixelated human face, symbolizing the erosion of reality.",
    body: [
      {
        type: "paragraph",
        text: "Last month, a high-profile court case was nearly derailed by a piece of video evidence that looked, sounded, and felt authentic—but was created entirely by a generative model in less than ten minutes.",
      },
      { type: "heading", text: "The Post-Truth Forensic Challenge" },
      {
        type: "paragraph",
        text: "Forensic experts are in a permanent arms race against synthetic media. While watermarking and cryptographic signatures offer some protection, the 'liar's dividend'—the ability for a guilty party to claim real evidence is fake—is becoming a powerful tool in public discourse.",
      },
      {
        type: "quote",
        text: "When everything can be faked, the truth doesn't become more valuable—it becomes invisible.",
      },
      {
        type: "paragraph",
        text: "The solution may lie not in better AI detection, but in a return to chain-of-custody protocols that treat digital files with the same physical rigor as blood samples.",
      },
    ],
    related: [
      {
        title: "Deepfake Detection: A Losing Battle?",
        date: "Feb 12, 2026",
        image: "/article/article-3.jpg",
      },
      {
        title: "The Rise of the Verified Human",
        date: "Jan 22, 2026",
        image: "/article/article-1.jpg",
      },
      {
        title: "Social Media's Reality Filter",
        date: "Dec 18, 2025",
        image: "/article/article-4.jpg",
      },
    ],
  },
  {
    id: "6",
    slug: "bio-computing-era",
    category: "Tech",
    title: "Beyond Silicon: The Dawn of Bio-Computing",
    description:
      "Researchers have successfully used DNA strands to store and process complex data, signaling a shift toward organic hardware.",
    author: { name: "Liam Sterling", avatar: "/article/author.jpg" },
    date: "March 01, 2026",
    readTime: "11 min read",
    heroImage: "/article/article-2.jpg",
    figureCaption:
      "Photograph: A glowing Petri dish containing synthetic DNA programmed for data storage.",
    body: [
      {
        type: "paragraph",
        text: "Silicon has served us well for seven decades, but we are reaching the physical limits of how many transistors can be etched onto a chip. To go further, we are looking at the original computer: the biological cell.",
      },
      { type: "heading", text: "Encoding Data in the Alphabet of Life" },
      {
        type: "paragraph",
        text: "DNA is the most dense and durable storage medium in the universe. A single gram can theoretically store 215 petabytes of data. More impressively, it requires almost zero energy to maintain that data for thousands of years.",
      },
      {
        type: "quote",
        text: "We aren't just building computers that act like humans; we are building computers out of the same stuff as humans.",
      },
      {
        type: "paragraph",
        text: "While the 'write' speeds are currently slow, the potential for massive parallel processing in a drop of liquid could revolutionize fields like drug discovery and climate modeling.",
      },
    ],
    related: [
      {
        title: "The 10,000 Year Hard Drive",
        date: "Feb 05, 2026",
        image: "/article/article-4.jpg",
      },
      {
        title: "CRISPR for Coders",
        date: "Jan 18, 2026",
        image: "/article/article-1.jpg",
      },
      {
        title: "The Future of Organic RAM",
        date: "Dec 01, 2025",
        image: "/article/article-3.jpg",
      },
    ],
  },
];
