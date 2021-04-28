function StatusPanel(): JSX.Element {
  return (
    <div className="pb-4 px-4 text-sm md:text-2xl text-center lowercase text-yellow-100">
      Not connected. Click the connect button in the nagivation menu to connect.
    </div>
  );
}

export {StatusPanel};
