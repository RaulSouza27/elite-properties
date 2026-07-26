export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-10 lg:px-10">
        <p className="min-w-0 font-display text-xl">Ávila Residências</p>
        <p className="shrink-0 text-xs text-muted-foreground">
          CRECI-SP 28.410-J · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}