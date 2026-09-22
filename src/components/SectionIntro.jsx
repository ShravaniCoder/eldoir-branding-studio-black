export default function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
  theme = "light",
}) {
  const light = theme === "light";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>

      <h2
        className={`serif mt-4 text-4xl leading-[.94] sm:text-5xl lg:text-6xl ${
          light ? "text-ivory" : "text-obsidian"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-ivory/65" : "text-taupe"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
