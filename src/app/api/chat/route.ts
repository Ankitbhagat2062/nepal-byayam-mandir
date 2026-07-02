import { NextResponse } from "next/server";

export const runtime = "edge";

// Pre-defined knowledge base content
const RESPONSES = {
  heritage: `**Nepal Byayam Mandir Heritage Story:**
Nepal Byayam Mandir is the official pioneer gymnasium of Bodybuilding Sports in Nepal, established in **2010 B.S. (1953 A.D.)**. It has continuously produced world-class national and international athletes since its inception. It stands as the birthplace of bodybuilding fitness in the country, fostering generations of physical excellence.`,

  dharma_shree: `**The Dharma Shree Bodybuilding Championship:**
Since **2042 B.S. (1985 A.D.)**, Nepal Byayam Mandir has organized and conducted the **'DHARMA SHREE'** Bodybuilding Championship. It remains the country's most prestigious and highest cash-prize bodybuilding tournament, held in solemn honor of the immortal national martyr **Dharma Bhakta Mathema** (a pioneer athlete and political hero who was executed by the state in 1941 A.D. for fighting for democracy).`,

  philosophy: `**Philosophy & Strategy:**
We operate under the World Health Organization (WHO) official slogan, **'MOVE FOR HEALTH'**. Our core directive is to combat physical inactivity, high blood pressure, diabetes, and stress, creating better citizens by harmonizing a perfect physique with exceptional mental health.`,

  programs: `**Our 6 Core Fitness Programs:**
1. **Body Shaping & Toning**: Engineered specifically to target fat burn-off and eliminate obesity.
2. **Weight Gaining**: Focuses on progressive heavy resistance to put on muscle mass instead of unwanted fat.
3. **Strength Improvement**: Advanced powerlifting and core training activities to enhance raw physical power.
4. **Executive Bonus Program**: Flexible exercise paths for busy managers and housewives.
5. **Sports Improvement Performance**: Pre-competition prep optimizing agility and speed for competitive athletes.
6. **Aerobics Dance Exercise Programs**: Cardio-rich low/high impact classes for fat burning and muscular toning.`,

  memberships: `**Our 9 Membership Categories:**
Each category features Monthly (M), Quarterly (3M), Half-Yearly (6M), and Yearly (12M) contracts:
1. **Only Gym**: Standard weight training & heavy iron floor pass.
2. **Gym / Cardio Combo**: Weight training + dedicated cardiovascular deck access.
3. **Only Zumba**: Dedicated Zumba Dance Studio sessions.
4. **Zumba / Cardio Combo**: Zumba Studio + Cardiovascular Deck access.
5. **Kickboxing Terminal**: Stamina conditioning, combat sculpting, & heavy bag drills.
6. **Yoga Sanctuary**: Mindfulness, posture, & stress release studio.
7. **Sauna & Steam Bath**: Therapeutic suite access (*strictly capped at 2 sessions a week* for safety). Includes single-session pass.
8. **Full Membership**: All-inclusive package (Gym, Cardio, Zumba, Sauna, & Steam Bath) - *Best Value*.
9. **Locker Rentals**: Secure personal athlete lockers.`,

  rules: `**Gym Code of Conduct & Operational Rules:**
- **Sauna & Steam Capping**: Capped strictly at twice a week to avoid dehydration or stress.
- **Etiquette**: Re-rack weights after usage. Wipe down benches. Proper athletic shoes and clothes must be worn.
- **Locker Bookings**: Lockers are rented on monthly/yearly terms. Personal locks are recommended.
- **Membership**: Non-refundable and non-transferable. Scan your RFID card upon entry at the front desk.`,
};

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Empty query message." }, { status: 400 });
    }

    const query = message.toLowerCase();
    let reply = "";

    // Parse keywords for relevant matching
    if (query.includes("history") || query.includes("heritage") || query.includes("pioneer") || query.includes("old") || query.includes("found") || query.includes("1953") || query.includes("2010")) {
      reply += RESPONSES.heritage + "\n\n";
    }
    if (query.includes("dharma") || query.includes("shree") || query.includes("martyr") || query.includes("bhakta") || query.includes("mathema") || query.includes("1985") || query.includes("2042")) {
      reply += RESPONSES.dharma_shree + "\n\n";
    }
    if (query.includes("who") || query.includes("philosophy") || query.includes("move") || query.includes("health") || query.includes("inactivity") || query.includes("slogan")) {
      reply += RESPONSES.philosophy + "\n\n";
    }
    if (query.includes("program") || query.includes("shaping") || query.includes("gain") || query.includes("toning") || query.includes("strength") || query.includes("executive") || query.includes("sports") || query.includes("aerobic") || query.includes("zumba")) {
      reply += RESPONSES.programs + "\n\n";
    }
    if (query.includes("price") || query.includes("membership") || query.includes("rate") || query.includes("cost") || query.includes("fee") || query.includes("cardio") || query.includes("locker") || query.includes("combo")) {
      reply += RESPONSES.memberships + "\n\n";
    }
    if (query.includes("rule") || query.includes("conduct") || query.includes("etiquette") || query.includes("sauna") || query.includes("steam") || query.includes("limit") || query.includes("cap")) {
      reply += RESPONSES.rules + "\n\n";
    }

    // Default response if no matches found
    if (!reply) {
      reply = `Hello! I am your AI assistant for **Nepal Byayam Mandir** (Nepal's Pioneer Gym since 1953 A.D.). 

I can answer questions regarding:
1. **Gym Heritage & Foundation** (Est. 1953 A.D. / 2010 B.S.)
2. **The Dharma Shree Tournament** (Nepal's peak bodybuilding event)
3. **Training Programs** (Body Shaping, Gaining, Executive fitness)
4. **Our 9 Membership Categories & Rates**
5. **Operational Gym Rules & Safety Caps**

How can I help you in your physical cultivation path today?`;
    }

    return NextResponse.json({
      reply: reply.trim(),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process message." }, { status: 500 });
  }
}
