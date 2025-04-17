import { ContentItemGenerationProps } from "../types/content";
import ContentItem from "./ContentItem"

interface HeaderProps {
    color: string;
    content: ContentItemGenerationProps[];
}

export default function ContentGroup({ color, content}: HeaderProps) {

    return (
        <>
        {content.map((item, index) => (
        <ContentItem
          key={index}
          color={color}
          count={"0"+(index + 1).toString()}
          subheader={item.subheader}
          content={item.content}
        />
      ))}
        </>
        

    )
}