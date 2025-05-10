import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Avatar from "./Avatar";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          {"Vinayak Saindane"}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={([
  {
    type: 'paragraph',
    text: "I'm a Flutter developer with a diploma in Computer Engineering and a passion for building seamless, cross-platform mobile and web experiences. With hands-on experience in technologies like Vue.js, React, and JavaScript, I bring both depth and versatility to the projects I work on.",
    spans: []
  },
  {
    type: 'paragraph',
    text: "My journey in tech has been shaped by a strong foundation in engineering principles, continuous self-improvement, and real-world development. I focus on creating performant mobile apps and responsive web interfaces that prioritize user experience and maintainability.",
    spans: []
  },
  {
    type: 'paragraph',
    text: "What sets me apart is my ability to adapt across platforms and technologies while maintaining a consistent commitment to clean, efficient, and scalable code. I approach every project not just as a developer, but as a problem solver—crafting solutions that are both functional and thoughtfully designed.",
    spans: []
  },
  {
    type: 'paragraph',
    text: "If you're looking for someone who blends technical skill with creativity and a collaborative mindset, let's connect and build something impactful together.",
    spans: []
  }
])} />
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />

        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
