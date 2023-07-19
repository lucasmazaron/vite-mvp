
interface ContentProps {
  toolbar: JSX.Element;
}

export function ContentComponent(props: React.PropsWithChildren<ContentProps>){
  const { toolbar } = props;
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        {toolbar}
        <div className="container-fluid py-4">
          {props.children}
        </div>
    </main>
  );
}