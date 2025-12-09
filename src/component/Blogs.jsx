import React from "react";
import WhatsAppButton from "./WhatsappButton";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const BlogsComponent = () => {
  const BLOGS = [
    {
      id: 1,
      title: "AI Video Editing Playbook for 2025",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 2,
      title: "Branding that Converts: Data + Design",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 3,
      title: "The Video Agency Tech Stack You Need",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 4,
      title: "How Short-form Drives Long-term Brand",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 5,
      title: "Creative Ads: Lessons from D2C Unicorns",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 6,
      title: "Mastering Content Calendars with AI",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 7,
      title: "YouTube Growth with Micro-Experiments",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 8,
      title: "The Science of Hooks & Retention",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 9,
      title: "From Idea to Edit: A Pro Workflow",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 10,
      title: "How to Measure Creative Quality",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 11,
      title: "Reels vs Shorts vs TikTok: What Changes",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 12,
      title: "Influencer Ops: Pricing & Outcomes",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 13,
      title: "Motion Design for Attention Markets",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 14,
      title: "Audio Branding: The Overlooked Lever",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 15,
      title: "Editing for Emotion: A Guide",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 16,
      title: "Template Systems for Scale",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 17,
      title: "Attribution for Video Funnels",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 18,
      title: "Teams & Processes at a Video Agency",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 19,
      title: "Generative AI Risks & Guardrails",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
    {
      id: 20,
      title: "Future of Content Creation in India",
      paragraphs: [
        "A modern video agency in 2025 runs like a product team. We begin with a tight brief, measurable outcomes, and a hypothesis about audience behavior. AI speeds the boring parts: transcription, rough cuts, b-roll search, subtitle styling, and format exports. Editors focus where humans win—story beats, pacing, brand voice. Our stack pairs auto-cut tools with node-based grading and motion presets. The result is less waiting and more iterating. For brands, this means faster time-to-creative without losing craft.",
        "The data layer matters as much as the edit. Each upload ships with tracking—UTM hygiene, platform tags, and retention markers. We test hooks in parallel, compare first-three-seconds drop-off, and feed learnings back into scripts. Keywords such as AI, Content Creation, Branding, and Video Agency are embedded naturally for search while keeping language conversational. This mix of science and style unlocks consistent reach and compounding brand memory.",
      ],
    },
  ];

  const [count, setCount] = useState(6);
  const items = useMemo(() => BLOGS.slice(0, count), [count]);

  return (
    <div className="mt-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((b) => (
          <article
            key={b.id}
            className={`bg-white h-80 rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col`}
          >
            <h3 className="text-xl font-semibold">{b.title}</h3>
            {b.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="mt-3 text-sm text-slate-700 leading-7 line-clamp-3"
              >
                {p}
              </p>
            ))}
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-slate-500">~4 min read</span>
              <WhatsAppButton variant="ghost" label="Discuss on WhatsApp" />
            </div>
          </article>
        ))}
      </div>
      {count < BLOGS.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setCount((c) => c + 6)}
            className="px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 transition"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

const Blogs = () => {
  return (
    <section id="blogs" className="py-20">
      <motion.div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Insights & Case Studies
          </h2>
          <WhatsAppButton variant="ghost" label="WhatsApp us" />
        </div>
        <BlogsComponent />
      </motion.div>
    </section>
  );
};

export default Blogs;
