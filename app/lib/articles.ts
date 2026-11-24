export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Article = { slug: string; title: string; category: string; excerpt: string; readTime: string; published: string; intro: string; sections: ArticleSection[] };

export const articles: Article[] = [
  {
    slug: "small-business-ai-marketing",
    title: "How Small Businesses Can Start Using AI in Their Marketing",
    category: "AI Marketing",
    excerpt: "A practical way to choose useful AI tasks, keep human judgment involved, and make marketing work easier.",
    readTime: "7 min read",
    published: "October 8, 2026",
    intro: "AI can help a small business research, plan, create, and follow up more efficiently. The best place to begin is not with a long list of tools. It is with one recurring marketing task that takes too much time or regularly gets delayed.",
    sections: [
      { heading: "Begin with a workflow, not a tool", paragraphs: ["Write down the marketing activities you repeat each week: answering common questions, planning social posts, summarizing customer feedback, drafting email ideas, or reviewing campaign notes. Choose a task that is frequent, low risk, and easy for you to check.", "This keeps the goal concrete. Instead of asking how your business should ‘use AI,’ you are deciding whether AI can help produce a better first draft, organize information, or shorten a repetitive step."], bullets: ["Frequent enough to save real time", "Easy for a person to review", "Connected to a clear marketing goal"] },
      { heading: "Give AI useful context", paragraphs: ["Generic inputs usually produce generic outputs. Before requesting ideas or copy, explain your business, audience, offer, tone, and the action you want the customer to take. Include examples of language that feels right and phrases you avoid.", "Save this core context in a short brand brief. Reuse it, then add the details of the specific campaign or customer question each time."] },
      { heading: "Keep a human review step", paragraphs: ["Treat AI output as a starting point. Check factual accuracy, promises, tone, privacy, and whether the message sounds like your business. A person should approve anything that customers will see.", "Human review is especially valuable when a message involves price, policy, sensitive customer information, or a claim about results."] },
      { heading: "Try one four-week experiment", paragraphs: ["Pick one use case and test it for four weeks. Record how long the task took before, what changed, and whether the final work became more useful or consistent. A simple record helps you decide whether to keep, change, or stop the workflow."], bullets: ["Week 1: define the task and quality checklist", "Week 2: test and refine your instructions", "Week 3: document the repeatable steps", "Week 4: review time saved and output quality"] },
      { heading: "A sensible first project", paragraphs: ["A monthly content outline is a good starting point. Give the AI your audience questions, current offers, seasonal context, and preferred channels. Ask for themes first, select the strongest ideas yourself, then develop individual posts. This divides the work well: AI helps organize possibilities while you make the strategic choices."] },
    ],
  },
  {
    slug: "prepare-first-meta-ad-campaign",
    title: "What to Prepare Before Running Your First Meta Ad Campaign",
    category: "Meta Ads",
    excerpt: "Clarify your goal, offer, audience, creative, and follow-up before putting budget behind a campaign.",
    readTime: "8 min read",
    published: "October 14, 2026",
    intro: "A Meta ad campaign works best when the decisions around it are clear before the first ad goes live. Preparation helps you avoid paying for attention that has nowhere useful to go.",
    sections: [
      { heading: "Choose one business outcome", paragraphs: ["Decide what the campaign should help a person do: request a quote, book a call, buy a specific product, visit a location, or join a list. A campaign with several competing outcomes becomes difficult to explain and measure.", "Translate the business outcome into a visitor action. That action will guide the campaign objective, creative, landing page, and follow-up."] },
      { heading: "Make the offer easy to understand", paragraphs: ["A good offer tells the right person what they will receive, why it matters, and what happens next. Remove vague wording. If the offer needs a long explanation in the ad, simplify it or build a landing page that can do the explaining."], bullets: ["What is being offered?", "Who is it for?", "Why should they care now?", "What should they do next?"] },
      { heading: "Describe the audience in useful terms", paragraphs: ["Go beyond age and location. Note the situation that makes someone need your offer, the questions they ask, their likely objections, and what they may already have tried. These details improve both targeting choices and the message.", "Keep separate audience ideas separate at first. That makes it easier to learn which message and group are responding."] },
      { heading: "Prepare several creative angles", paragraphs: ["One image and one caption provide little room to learn. Prepare a small set of clear variations: a direct benefit, a common problem, a useful demonstration, or an invitation to discover more. Keep the brand recognizable while testing the angle.", "The opening line and visual should work together. On mobile, a person should understand the subject quickly without needing to expand the caption."] },
      { heading: "Check the destination and follow-up", paragraphs: ["Visit the landing page on a phone. Confirm that it loads quickly, matches the ad, answers the main objection, and makes the next action easy. Then decide who responds to inquiries and how quickly the first follow-up happens.", "Ads create the opportunity. The page and follow-up determine whether that opportunity can become a conversation or sale."] },
      { heading: "Define a review routine", paragraphs: ["Choose when you will review performance and what decisions you are prepared to make. Avoid reacting to every short-term change. Look at delivery, attention, landing-page behavior, inquiries, and lead quality together so you can diagnose the whole journey."] },
    ],
  },
  {
    slug: "practical-digital-marketing-plan",
    title: "How to Create a Practical Digital Marketing Plan",
    category: "Digital Marketing",
    excerpt: "Turn a broad growth goal into a focused 90-day plan your small business can actually carry out.",
    readTime: "8 min read",
    published: "October 20, 2026",
    intro: "A practical marketing plan is a set of priorities and decisions, not a long list of channels. It should help you know what to do this week, what to measure, and what can wait.",
    sections: [
      { heading: "Set one 90-day priority", paragraphs: ["Choose the main business result marketing should support during the next 90 days. You might focus on generating qualified consultations, improving repeat purchases, introducing a new service, or building demand in one local area.", "A single priority gives you a filter. If an activity does not support it, reduce it, delay it, or remove it from the plan."] },
      { heading: "Map the customer journey", paragraphs: ["Write the simple path from first awareness to action. Where do people discover you? What do they need to understand? What gives them confidence? What makes the next step easy?", "Look for one weak point. You may already attract visitors but have an unclear landing page. You may receive inquiries but follow up slowly. The weakest connection often deserves attention before adding a new channel."] },
      { heading: "Choose a small channel mix", paragraphs: ["Assign each channel a job. Search might capture existing demand, social content may demonstrate expertise, ads can reach a focused audience, and email can continue the conversation. You do not need every channel. You need a combination your team can maintain."], bullets: ["One channel to attract attention", "One place to explain the offer", "One follow-up method", "One simple measurement routine"] },
      { heading: "Create a realistic activity rhythm", paragraphs: ["Turn strategy into a weekly rhythm that fits the time available. For example: one useful article or video, three supporting social posts, one email, and one performance review. A smaller rhythm completed consistently is more valuable than an ambitious calendar that stops after two weeks."] },
      { heading: "Measure the journey, not just reach", paragraphs: ["Track a few signals from different stages: qualified visits, meaningful page actions, inquiries, conversations, and sales outcomes. Reach and clicks can help diagnose delivery, but they do not explain business value on their own.", "Review the numbers with context. Note what changed in the offer, audience, creative, timing, or follow-up so that performance becomes a source of learning."] },
      { heading: "Use a monthly decision meeting", paragraphs: ["At the end of each month, answer three questions: What should we keep? What should we improve? What should we stop? Record the answers and update the next month’s activity. This simple habit turns the plan into a living system."] },
    ],
  },
  {
    slug: "email-automations-for-lead-follow-up",
    title: "Email Automations That Help Small Businesses Follow Up with Leads",
    category: "Email Marketing",
    excerpt: "Four consent-based email journeys that create timely, helpful follow-up without sounding robotic.",
    readTime: "7 min read",
    published: "October 26, 2026",
    intro: "Good email automation delivers a useful message at a relevant moment. It supports personal service by making sure important follow-up happens consistently, even when the business is busy.",
    sections: [
      { heading: "Start with permission and expectations", paragraphs: ["Only email people who have given the appropriate permission, and explain what they can expect. Use clear sender details, an easy unsubscribe option, and a list-growth method that matches how the relationship began.", "Keep the data you collect limited to what helps you serve the person. More fields do not automatically produce a better journey."] },
      { heading: "1. The welcome sequence", paragraphs: ["A welcome sequence begins immediately after someone subscribes or requests a resource. The first message should deliver what was promised. Later messages can introduce your approach, answer a common question, and invite a suitable next step."], bullets: ["Email 1: deliver and welcome", "Email 2: share a useful quick win", "Email 3: answer a common objection", "Email 4: invite the next step"] },
      { heading: "2. The inquiry follow-up", paragraphs: ["When someone submits a form, send a prompt acknowledgement that confirms the request and explains what happens next. Internal notifications should also make ownership clear so a real person can respond.", "If a conversation does not begin, a short follow-up can offer a helpful resource or make it easy to reply. Avoid sending a long sales sequence to someone who only asked a specific question."] },
      { heading: "3. The nurture journey", paragraphs: ["Some leads are interested but not ready. A nurture journey can address the decisions they are working through. Organize messages around customer questions, examples, comparisons, and practical guidance rather than repeating the same sales pitch.", "Segment by meaningful behavior or stated interest when possible. Someone interested in email marketing should receive different guidance from someone researching advertising."] },
      { heading: "4. The re-engagement check-in", paragraphs: ["A re-engagement message asks whether a subscriber still wants to hear from you and offers a clear reason to stay. Keep the sequence brief. If the person remains inactive, reduce frequency or remove them according to your policy."] },
      { heading: "Improve one journey at a time", paragraphs: ["Review whether messages are delivered, opened, clicked, replied to, and followed by the intended action. Look for the point where interest drops, then improve the subject, message, timing, or next step. Change one meaningful variable at a time so the result teaches you something."] },
    ],
  },
];

export const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];
export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
export function articleSearchText(article: Article) { return [article.title, article.excerpt, article.category, article.intro, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])])].join(" ").toLowerCase(); }
