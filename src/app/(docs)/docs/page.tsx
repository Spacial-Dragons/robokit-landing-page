export default function DocsPage() {
  return (
    <div className="h-svh w-full ">
      <iframe
        src={process.env.ROBOKIT_DOCUMENTATION_URL}
        className="size-full"
        title="RoboKit Documentation"
      />
    </div>
  );
}
