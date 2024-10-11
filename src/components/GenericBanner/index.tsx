export interface GenericBannerProps {
    children?: React.ReactNode;
    classname?: string;
}

export default function GenericBanner(props: GenericBannerProps) {
  return (
    <div className={`${props.classname || 'bg-custom-purple'} w-full h-1/2 border-b-green-400 border-b-4 pt-44 pb-16`}>
      {props.children}
    </div>
  );
}
