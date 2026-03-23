import type { Metadata } from "next";

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoPageContent = {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  educationalHeading: string;
  educationalParagraphs: string[];
  benefits: string[];
  faqs: SeoFaq[];
};

export function getMetadata(content: SeoPageContent): Metadata {
  return {
    title: content.metaTitle,
    description: content.description,
  };
}

export const calendlyUrl =
  "https://calendly.com/macagent7483/free-20-minute-birth-consultation";

export const seoPages = {
  "virtual-birth-doula": {
    title: "Virtual Birth Doula",
    metaTitle:
      "Virtual Birth Doula Support | Kimberly Zoltek New England",
    description:
      "Learn how virtual birth doula support helps New England families prepare for labor, feel informed, and receive calm professional guidance from Kimberly Zoltek.",
    eyebrow: "Virtual Birth Doula",
    heroTitle:
      "Virtual birth doula support that helps families feel prepared, calm, and informed.",
    heroDescription:
      "Kimberly Zoltek offers warm, evidence-based virtual doula care for families across New England, combining education, planning, and steady emotional support before birth and beyond.",
    educationalHeading: "What virtual birth doula support can look like",
    educationalParagraphs: [
      "Virtual doula care gives families direct access to preparation, guidance, and emotional support without requiring in-person appointments. Through scheduled video calls, messaging, and personalized planning, families can ask questions, build confidence, and prepare for labor in a way that fits real life.",
      "For many parents, virtual support provides the structure they need to feel less overwhelmed. Kimberly helps clients understand the stages of labor, review comfort measures, prepare for common decisions, and clarify what kind of support they want from their care team and partner.",
      "Because support is flexible and accessible, virtual doula care can be especially valuable for families who want professional guidance throughout pregnancy and postpartum while staying close to home in New England.",
    ],
    benefits: [
      "Consistent emotional support throughout pregnancy and postpartum",
      "Evidence-based education to reduce uncertainty and fear",
      "Flexible access from anywhere in New England",
      "Partner preparation so support feels coordinated during labor",
    ],
    faqs: [
      {
        question: "Is virtual birth doula support effective?",
        answer:
          "Yes. Virtual support can be highly effective for education, planning, emotional reassurance, and partner coaching. Many families value the flexibility and continuity it offers before and after birth.",
      },
      {
        question: "When should I hire a virtual doula?",
        answer:
          "Many families begin in the second or third trimester, but support can be helpful at many points in pregnancy or even as you prepare for postpartum recovery.",
      },
      {
        question: "Can a virtual doula help if I already have a medical provider?",
        answer:
          "Absolutely. A doula does not replace medical care. Kimberly complements your provider by helping you understand options, prepare questions, and feel more supported in the process.",
      },
    ],
  },
  "online-labor-support": {
    title: "Online Labor Support",
    metaTitle:
      "Online Labor Support for New England Families | Kimberly Zoltek",
    description:
      "Discover how online labor support helps families navigate labor with confidence through coaching, comfort strategies, and evidence-based virtual doula care.",
    eyebrow: "Online Labor Support",
    heroTitle:
      "Steady online labor support for the moments when calm guidance matters most.",
    heroDescription:
      "Kimberly Zoltek helps expectant families prepare for labor with practical coaching, communication strategies, and real-time virtual support that keeps everyone grounded.",
    educationalHeading: "How online labor support helps during birth preparation",
    educationalParagraphs: [
      "Labor can feel unpredictable, especially for first-time parents. Online labor support helps families prepare in advance by reviewing what labor may feel like, how to recognize changes, and which comfort measures can help at different stages.",
      "Kimberly works with families to build a plan for communication, coping, and partner involvement. That preparation often reduces panic during labor because families already understand the tools they can use and the questions they may want to ask.",
      "Even when the birth experience changes unexpectedly, a strong labor support plan can make decision-making feel more manageable and less isolating.",
    ],
    benefits: [
      "Preparation for each stage of labor",
      "Partner coaching for breathing, positioning, and advocacy",
      "Greater confidence when labor takes unexpected turns",
      "Professional guidance that remains accessible from home",
    ],
    faqs: [
      {
        question: "Can online labor support help my partner too?",
        answer:
          "Yes. Partner coaching is a central part of Kimberly's work, helping partners understand how to offer physical and emotional support throughout labor.",
      },
      {
        question: "Is online support only for first-time parents?",
        answer:
          "No. It can benefit both first-time and experienced parents, especially if they want clearer planning, stronger partner involvement, or better preparation for a different birth experience.",
      },
      {
        question: "What kinds of labor topics are covered?",
        answer:
          "Families often review labor stages, comfort techniques, common interventions, movement and positioning, communication strategies, and how to stay flexible when plans change.",
      },
    ],
  },
  "postpartum-doula-support": {
    title: "Postpartum Doula Support",
    metaTitle:
      "Postpartum Doula Support Online | Kimberly Zoltek New England",
    description:
      "Explore postpartum doula support for recovery, newborn adjustment, feeding questions, and emotional reassurance with Kimberly Zoltek.",
    eyebrow: "Postpartum Doula Support",
    heroTitle:
      "Compassionate postpartum support for recovery, feeding, and the transition home.",
    heroDescription:
      "Kimberly Zoltek supports families through early postpartum recovery with practical virtual guidance, lactation-informed care, and reassurance during a major life transition.",
    educationalHeading: "Why postpartum support matters after birth",
    educationalParagraphs: [
      "The postpartum period can bring joy, fatigue, uncertainty, and a steep learning curve all at once. Having steady support during this phase helps families feel less alone and more equipped to respond to new challenges as they come up.",
      "Virtual postpartum doula support can include recovery guidance, feeding support, emotional check-ins, newborn adjustment conversations, and help creating routines that protect rest and healing.",
      "For families in New England who want expert support without extra travel or scheduling stress, online postpartum care can be a practical and deeply reassuring option.",
    ],
    benefits: [
      "Guidance for physical recovery after birth",
      "Support with early newborn adjustment and routine building",
      "Lactation-informed help for breastfeeding questions",
      "A calmer, more supported transition into family life",
    ],
    faqs: [
      {
        question: "Do I need postpartum support if birth went well?",
        answer:
          "Many families benefit from postpartum support regardless of how birth went. Recovery, feeding, sleep disruption, and emotional adjustment can still feel intense even after a positive delivery experience.",
      },
      {
        question: "Can Kimberly help with breastfeeding concerns?",
        answer:
          "Yes. Kimberly is lactation certified and offers informed support around feeding questions, latch concerns, and the early learning curve of breastfeeding.",
      },
      {
        question: "How long does postpartum support usually last?",
        answer:
          "That depends on the family. Some want support during the first days and weeks, while others prefer a longer stretch of check-ins as routines and confidence build over time.",
      },
    ],
  },
  "birth-plan-coaching": {
    title: "Birth Plan Review Call",
    metaTitle:
      "Birth Plan Review Call for Expecting Families | Kimberly Zoltek",
    description:
      "Book a Birth Plan Review Call with Kimberly Zoltek to clarify your preferences, prepare for common decisions, and approach labor with confidence.",
    eyebrow: "Birth Plan Review Call",
    heroTitle:
      "Create a thoughtful birth plan that reflects your values and prepares you for real decisions.",
    heroDescription:
      "Kimberly Zoltek helps families build flexible, informed birth plans so they can approach labor feeling clear, prepared, and supported rather than overwhelmed.",
    educationalHeading: "What a birth plan review call should actually do",
    educationalParagraphs: [
      "A good birth plan is not about controlling every detail of labor. It is about understanding your options, clarifying your preferences, and making sure your care team and partner know what matters most to you.",
      "A birth plan review call helps families think through pain management, communication, environment, feeding goals, comfort techniques, and how they want to approach common interventions or unexpected changes.",
      "Kimberly guides this process with a practical, evidence-based lens so your plan supports both your hopes and the realities of birth.",
    ],
    benefits: [
      "Clearer understanding of your birth preferences",
      "Better communication with your partner and care team",
      "More confidence when decisions need to happen quickly",
      "A flexible plan that reduces stress instead of adding to it",
    ],
    faqs: [
      {
        question: "What is included in a birth plan review call?",
        answer:
          "Families typically review priorities, care preferences, labor coping plans, partner roles, and how to stay flexible if medical needs or labor circumstances shift.",
      },
      {
        question: "Can a birth plan review call help if I want an unmedicated birth?",
        answer:
          "Yes. Kimberly can help you explore coping tools, comfort measures, and communication strategies while also preparing for the possibility that plans may need to adapt.",
      },
      {
        question: "Is a birth plan still useful if I know I may need an induction or intervention?",
        answer:
          "Yes. A birth plan can still clarify your priorities, questions, and support needs even when medical interventions are part of the likely path.",
      },
    ],
  },
  "breastfeeding-support": {
    title: "Breastfeeding Support",
    metaTitle:
      "Virtual Breastfeeding Support | Kimberly Zoltek New England",
    description:
      "Get virtual breastfeeding support from Kimberly Zoltek for latch concerns, feeding confidence, and postpartum care rooted in lactation-informed guidance.",
    eyebrow: "Breastfeeding Support",
    heroTitle:
      "Breastfeeding support that is practical, compassionate, and grounded in real postpartum needs.",
    heroDescription:
      "Kimberly Zoltek offers virtual breastfeeding support to help families navigate feeding questions with calm, informed guidance in the early postpartum period.",
    educationalHeading: "How virtual breastfeeding support can help",
    educationalParagraphs: [
      "Early feeding can bring a mix of relief, exhaustion, and uncertainty. Questions about latch, comfort, frequency, and confidence are common, especially in the first days and weeks after birth.",
      "Virtual breastfeeding support gives families a place to ask those questions, troubleshoot common concerns, and get encouragement without needing to wait for a scheduled in-person visit.",
      "Kimberly's lactation certification and postpartum experience help her guide families through feeding goals in a way that is supportive, evidence-based, and responsive to each family's situation.",
    ],
    benefits: [
      "Lactation-informed answers to common feeding questions",
      "Support for building confidence in the early days",
      "Help identifying practical next steps when something feels off",
      "Compassionate guidance that fits into postpartum life at home",
    ],
    faqs: [
      {
        question: "Can virtual breastfeeding support help with latch issues?",
        answer:
          "It can help with education, observation, and next-step guidance. Kimberly can talk through common concerns and help families determine when additional in-person clinical support may also be useful.",
      },
      {
        question: "Is breastfeeding support only for new parents?",
        answer:
          "No. Families who have fed a baby before may still want support if this postpartum experience feels different or they are navigating new questions.",
      },
      {
        question: "What if I am unsure about my feeding plan?",
        answer:
          "Support can still be valuable. Kimberly helps families explore goals, understand options, and make informed decisions with less pressure and more clarity.",
      },
    ],
  },
  "what-does-a-virtual-doula-do": {
    title: "What Does a Virtual Doula Do",
    metaTitle:
      "What Does a Virtual Doula Do? | Kimberly Zoltek New England",
    description:
      "Learn what a virtual doula does, how support works online, and how Kimberly Zoltek helps New England families prepare for labor, birth, and postpartum recovery.",
    eyebrow: "What Does a Virtual Doula Do",
    heroTitle:
      "A virtual doula provides steady guidance, education, and support before birth and after baby arrives.",
    heroDescription:
      "Kimberly Zoltek helps families feel more prepared and less alone through virtual doula care that is warm, evidence-based, and tailored to real questions that come up during pregnancy, labor, and postpartum.",
    educationalHeading: "How a virtual doula supports families",
    educationalParagraphs: [
      "A virtual doula offers non-medical support through video calls, messaging, planning sessions, and ongoing communication. That support often includes labor preparation, birth planning, partner coaching, breastfeeding guidance, and postpartum check-ins.",
      "For many families, the most valuable part of virtual support is having a trusted person to turn to with questions. Kimberly helps clients understand what is normal, what options they may want to explore, and how to prepare emotionally and practically for birth.",
      "Virtual doula care can be especially helpful for families who want continuity, flexibility, and a calm professional presence without being limited by distance or in-person scheduling.",
    ],
    benefits: [
      "Clear education about labor, birth, and postpartum recovery",
      "Personalized support that fits your family and care setting",
      "Partner coaching that strengthens teamwork during labor",
      "Flexible virtual access across New England",
    ],
    faqs: [
      {
        question: "Does a virtual doula replace my doctor or midwife?",
        answer:
          "No. A virtual doula complements your medical care. Kimberly provides emotional support, education, and preparation, while your doctor or midwife remains responsible for medical care and clinical decisions.",
      },
      {
        question: "Can a virtual doula still be helpful if support is not in person?",
        answer:
          "Yes. Many families find virtual doula care highly valuable because they receive consistent guidance, planning help, and emotional support throughout pregnancy and postpartum.",
      },
      {
        question: "What topics can I ask a virtual doula about?",
        answer:
          "Families often ask about early labor signs, comfort measures, partner support, birth preferences, feeding questions, postpartum recovery, and what to expect at each stage.",
      },
    ],
  },
  "virtual-vs-in-person-doula": {
    title: "Virtual vs In-Person Doula",
    metaTitle:
      "Virtual vs In-Person Doula Support | Kimberly Zoltek New England",
    description:
      "Compare virtual vs in-person doula support, including benefits, differences, and how to decide which kind of care fits your family best.",
    eyebrow: "Virtual vs In-Person Doula",
    heroTitle:
      "Both virtual and in-person doulas offer meaningful support, but the right fit depends on what your family needs most.",
    heroDescription:
      "Kimberly Zoltek helps families understand the differences between virtual and in-person doula care so they can choose support that feels practical, reassuring, and aligned with their birth goals.",
    educationalHeading: "Understanding the difference between virtual and in-person doula care",
    educationalParagraphs: [
      "In-person doula care typically includes physical presence during labor, while virtual doula care focuses on education, preparation, communication, and ongoing emotional support delivered remotely. Both models can offer meaningful reassurance and structure.",
      "Virtual doula support is often a strong fit for families who want professional guidance throughout pregnancy and postpartum, who need flexibility, or who want a lower-barrier way to access doula support across New England.",
      "Choosing between the two often comes down to your budget, preferences, birth setting, scheduling needs, and whether you want support that centers more on preparation and continuity or on physical presence during labor.",
    ],
    benefits: [
      "Accessible support regardless of location",
      "Flexible scheduling for prenatal and postpartum sessions",
      "Strong focus on education, planning, and communication",
      "A practical option for families who still want expert guidance",
    ],
    faqs: [
      {
        question: "Is virtual doula care less personal than in-person support?",
        answer:
          "Not necessarily. Many families feel deeply supported through virtual care because of the consistency, responsiveness, and personalized preparation it provides over time.",
      },
      {
        question: "How do I know which option is right for me?",
        answer:
          "Think about the kind of support you want most. If you value flexibility, ongoing communication, education, and partner preparation, virtual care may be an excellent fit.",
      },
      {
        question: "Can virtual support still help during labor itself?",
        answer:
          "Yes. Virtual support can help families stay grounded, use comfort tools, communicate clearly, and adapt when labor unfolds differently than expected.",
      },
    ],
  },
  "signs-of-early-labor": {
    title: "Signs of Early Labor",
    metaTitle:
      "Signs of Early Labor: What to Expect | Kimberly Zoltek",
    description:
      "Learn common signs of early labor, what early labor may feel like, and when to reach out for support. Warm, educational guidance from Kimberly Zoltek.",
    eyebrow: "Signs of Early Labor",
    heroTitle:
      "Early labor can feel uncertain, but understanding the signs can make the beginning feel much less overwhelming.",
    heroDescription:
      "Kimberly Zoltek helps families recognize common signs of early labor, understand what is normal, and prepare for the hours ahead with more confidence and calm.",
    educationalHeading: "What early labor often looks and feels like",
    educationalParagraphs: [
      "Early labor can begin with contractions that are mild, irregular, or easy to talk through. Some people also notice cramping, lower back discomfort, loose stools, a shift in energy, or changes in cervical mucus as the body begins preparing for active labor.",
      "This stage can last for hours and sometimes much longer, especially for first-time parents. That does not necessarily mean anything is wrong. Often, early labor is simply the gradual beginning of a process that will become more intense and regular over time.",
      "Knowing the signs of early labor can help families pace themselves, rest when possible, hydrate, eat if they can, and avoid feeling like they need to rush before labor is clearly active.",
    ],
    benefits: [
      "Less fear around the earliest signs of labor",
      "Better pacing and energy conservation before active labor",
      "More confidence about when to rest, move, or reach out",
      "Supportive education that helps families stay grounded",
    ],
    faqs: [
      {
        question: "How do I know if I am in early labor or just having practice contractions?",
        answer:
          "Early labor contractions may become more noticeable over time, but they can still be irregular at first. Practice contractions often ease with rest, hydration, or a change in position. When in doubt, it can help to track the pattern and talk it through with a provider or doula.",
      },
      {
        question: "Should I go to the hospital during early labor?",
        answer:
          "That depends on your provider's guidance, your medical history, and how labor is progressing. Many families are encouraged to stay home during early labor if everything is low risk and coping feels manageable.",
      },
      {
        question: "What helps during early labor?",
        answer:
          "Rest, hydration, gentle movement, calm breathing, a warm shower, nourishing food, and reassurance from a trusted support person can all help make early labor feel more manageable.",
      },
    ],
  },
} satisfies Record<string, SeoPageContent>;
