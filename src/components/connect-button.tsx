type ConnectButtonProps = {
  className: string;
};

function ConnectButton({className}: ConnectButtonProps): JSX.Element {
  return <button className={className}>connect</button>;
}

export {ConnectButton};
