function DefaultLayout({ children, title }) {
  return (
    <div className="gap-0 min-w-full">
      <div class="bg-orange-300">{children}</div>
    </div>
  );
}

export default DefaultLayout;
