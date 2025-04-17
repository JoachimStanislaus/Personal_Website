export interface ContentItemGenerationProps{
    subheader: string;
    content: React.ReactNode;
}

export interface ContentItemProps extends ContentItemGenerationProps {
    color: string;
    count: string;
  }