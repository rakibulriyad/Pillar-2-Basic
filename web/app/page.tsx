import Link from "next/link";
import { getManifest } from "@/lib/content";

export default function HomePage() {
  const manifest = getManifest();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold leading-snug sm:text-3xl">{manifest.title}</h1>

      <div
        className="mt-4 rounded-lg border p-4 text-sm leading-relaxed"
        style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
      >
        <p>
          এই বইটি OECD-র প্রকাশিত GloBE Model Rules, Commentary, Safe Harbours ও
          Administrative Guidance-এর কাঠামোর উপর ভিত্তি করে লেখা একটি জেনেরিক
          practitioner হ্যান্ডবুক। এখানে ব্যাখ্যা বাংলায়, এবং সব technical term
          (GloBE Income, Covered Taxes, QDMTT, IIR, UTPR ইত্যাদি) হুবহু ইংরেজিতে
          রাখা হয়েছে।
        </p>
        <p className="mt-3">
          <strong>দাবিত্যাগ:</strong> Article নম্বর ও থ্রেশহোল্ডের মতো নির্দিষ্ট
          তথ্য পেশাগত কাজে ব্যবহারের আগে মূল OECD নথির সাথে মিলিয়ে নিতে হবে।
          যেখানে OECD নির্দেশনা এখনো অসম্পূর্ণ বা দেশভেদে ব্যাখ্যা ভিন্ন, বইয়ের
          প্রতিটি অধ্যায়ে তা স্পষ্টভাবে উল্লেখ করা আছে।
        </p>
      </div>

      <nav aria-label="বিষয়সূচি" className="mt-10 space-y-8">
        {manifest.parts.map((part) => (
          <section key={part.part}>
            <h2 className="text-base font-bold" style={{ color: "var(--fg)" }}>
              পর্ব {part.part} — {part.title}
            </h2>
            <ul className="mt-2 space-y-1">
              {part.chapters.map((chapter) => (
                <li key={chapter.slug}>
                  <Link
                    href={`/${chapter.slug}`}
                    className="text-[0.95rem] hover:underline"
                    style={{ color: "var(--link)" }}
                  >
                    অধ্যায় {chapter.chapter} — {chapter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-base font-bold" style={{ color: "var(--fg)" }}>
            পরিশিষ্ট
          </h2>
          <ul className="mt-2 space-y-1">
            {manifest.appendices.map((appendix) => (
              <li key={appendix.slug}>
                <Link
                  href={`/${appendix.slug}`}
                  className="text-[0.95rem] hover:underline"
                  style={{ color: "var(--link)" }}
                >
                  পরিশিষ্ট {appendix.id} — {appendix.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );
}
