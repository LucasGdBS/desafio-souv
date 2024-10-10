export interface GenericBannerProps {
    children?: React.ReactNode;
    classname?: string;
}

export default function GenericBanner(props: GenericBannerProps) {
  return (
    <div className={`${props.classname || 'bg-purple-950'} w-full h-screen border-b-green-400 border-b-4 pt-44`}>
      {props.children}
    </div>
  );
}
