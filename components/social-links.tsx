import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { site } from "@/data/site";

type Props = {
  className?: string;
  iconOnly?: boolean;
  compact?: boolean;
};

const socialItems = [
  { key: "linkedin", href: site.socials.linkedin, label: "LinkedIn", icon: Linkedin },
  { key: "x", href: site.socials.x, label: "X", icon: Twitter },
  { key: "github", href: site.socials.github, label: "GitHub", icon: Github },
  { key: "youtube", href: site.socials.youtube, label: "YouTube", icon: Youtube },
] as const;

export function SocialLinks({ className = "", iconOnly = true, compact = false }: Props) {
  const items = socialItems.filter((item) => Boolean(item.href));
  if (items.length === 0) return null;

  const iconSize = compact ? "h-4 w-4" : "h-[18px] w-[18px]";

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md p-1 text-ink/60 transition hover:-translate-y-0.5 hover:text-ink"
            aria-label={item.label}
            title={item.label}
          >
            <Icon className={iconSize} strokeWidth={1.8} aria-hidden="true" />
            {iconOnly ? <span className="sr-only">{item.label}</span> : <span>{item.label}</span>}
          </Link>
        );
      })}
    </div>
  );
}
